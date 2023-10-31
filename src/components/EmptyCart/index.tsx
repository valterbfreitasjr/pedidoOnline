import { Button, Container } from './style'

import manAndBurgerImg from '../../assets/man-and-burger.svg'

interface EmptyCartProps {
  title: string
}

export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar cardápio.</Button>
      <img src={manAndBurgerImg} alt='Homem com hambúrger'></img>
    </Container>
  )
}
