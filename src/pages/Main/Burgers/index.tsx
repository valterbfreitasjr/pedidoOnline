import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'Mega',
      description: 'descrição',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'Extra Burger',
      description: 'descrição - 2',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 3,
      snack: 'Extra Bacon',
      description: 'descrição - 3',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
  ]

  console.log(data)

  return (
    <>
      <Head title='Hambúrgueres' description='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
