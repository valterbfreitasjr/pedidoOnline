import { useContext } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnack'

export default function Pizzas() {
  const { pizzas } = useSnack()

  return (
    <>
      <Head title='Pizzas' description='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
