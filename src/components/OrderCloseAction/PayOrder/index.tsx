import { currencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../styles'

export function PayOrder() {
  const { cart } = useCart()

  const valorTotal = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container to={'/'}>
      <button type='button'>Pagar</button>
      <span>
        Total <strong>{currencyFormat(valorTotal)}</strong>
      </span>
    </Container>
  )
}
