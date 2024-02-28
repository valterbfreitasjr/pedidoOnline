import { useCart } from '../../../hooks/useCart'

import { currencyFormat } from '../../../helpers/currencyFormat'

import { Container } from '../styles'

export function PayOrder() {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0)

  return (
    <Container>
      <button type='submit'>Pagar</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
