import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

//https://site.com.br/api/burgers
//https://site.com.br/api/pizzas
//https://site.com.br/api/drinks
//https://site.com.br/api/ice-creams

export const getBurgers = () => api.get('/burgers')
export const getPizzas = () => api.get('/pizzas')
export const getDrinks = () => api.get('/drinks')
export const getIcreCreams = () => api.get('/ice-creams')

export default api
