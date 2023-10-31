import { FiPlus } from 'react-icons/fi'
import { FaTrashAlt } from 'react-icons/fa'

import { currencyFormat } from '../../helpers/currencyFormat'
import { SkeletonSnack } from './SkeletonSnack'
import { useCart } from '../../hooks/useCart'

import { Container } from './styles'
import { SnackData } from '../../interfaces/SnackData'

interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => {
            const snackCheck = cart.find(
              (item) => item.id === snack.id && item.snack === snack.snack,
            )

            return (
              <div key={snack.id} className='snack'>
                {snackCheck && <span>{snackCheck.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormat(snack.price)}</strong>
                  <button type='button' onClick={() => addSnackIntoCart(snack)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
