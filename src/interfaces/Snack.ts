import { SnackData } from './SnackData'

export interface Snack extends SnackData {
  quantity: number
  subtotal: number
}
