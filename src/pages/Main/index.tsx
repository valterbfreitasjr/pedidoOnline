import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logoImg from './../../assets/logo.svg'
import { MyOrder } from '../../components/MyOrder'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt='Logo do site' />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
