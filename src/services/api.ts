import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

//https://site.com.br/api/burgers
//https://site.com.br/api/pizzas
//https://site.com.br/api/drinks
//https://site.com.br/api/ice-creams

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIcreCreams = () => api.get<SnackData[]>('/ice-creams')

export default api
