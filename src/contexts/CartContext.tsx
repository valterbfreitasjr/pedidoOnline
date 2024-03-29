import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'

import { SnackData } from '../interfaces/SnackData'
import { CustomerData } from '../interfaces/CustomerData'
import { Snack } from '../interfaces/Snack'
import { processCheckout } from '../services/api'

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@FoodCommerce:cart'

export function CartProvider({ children }: Readonly<CartProviderProps>) {
  const navigate = useNavigate()
  const [cart, setCart] = useState<Snack[]>(() => {
    const value = localStorage.getItem(localStorageKey)

    if (value) return JSON.parse(value)

    return []
  })

  function saveCart(items: Snack[]) {
    setCart(items)
    localStorage.setItem(localStorageKey, JSON.stringify(items))
  }

  function clearCart() {
    localStorage.removeItem(localStorageKey)
  }

  function addSnackIntoCart(snack: SnackData): void {
    //buscar
    const snackCheck = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    //atualizar
    if (snackCheck) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })
      toast.success(`+1 ${snackEmoji(snack.snack)} ${snack.name} - Adicionado com sucesso!`)
      saveCart(newCart)
      return
    }

    //adicionar
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack]

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} - Adicionado com sucesso!`)

    saveCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))
    toast.success(`Snack removido com sucesso!`)
    saveCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    if (newQuantity <= 0) {
      return removeSnackFromCart(snack)
    }

    const snackCheck = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

    if (!snackCheck) return

    const newCart = cart.map((item) => {
      if (item.id === snack.id && item.snack === snack.snack) {
        return { ...item, quantity: newQuantity, subtotal: item.price * newQuantity }
      }
      return item
    })

    saveCart(newCart)
  }

  function snackCartIncrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  async function payOrder(customer: CustomerData) {
    try {
      const response = await processCheckout(cart, customer)

      if (response.data.status !== 'PAID') {
        toast.error('Erro ao processar o pagamento, por favor, tente novamente mais tarde.')
        return
      }

      clearCart()

      navigate(`/order/success/${response.data.id}`)
    } catch (error) {
      console.error(error)
      toast.error('Erro ao processar o pedido.')
    }
    return
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
