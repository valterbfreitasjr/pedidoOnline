import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import { SnackTitle } from '../../components/SnackTitle'

import logoImg from './../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt='Logo do site' />
        <Outlet />
      </section>
    </Container>
  )
}
