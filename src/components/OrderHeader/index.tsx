import logoImg from '../../assets/logo.svg'

import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to={'/'}>
        <img src={logoImg} alt='Logo do site' />
      </Link>

      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> lanche(s)
          </span>
        </div>

        <Link to={'/cart'}>
          <CartIcon />
        </Link>
      </div>
    </Container>
  )
}
