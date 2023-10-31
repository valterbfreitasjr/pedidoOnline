import { currencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../styles'

export function ConfirmOrder() {
  const { cart } = useCart()

  const valorTotal = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container to={'payment'}>
      <button type='button'>Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(valorTotal)}</strong>
      </span>
    </Container>
  )
}
