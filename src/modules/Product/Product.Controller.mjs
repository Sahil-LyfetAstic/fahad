import { Router } from 'express'
const api = new Router()


const product = [
  {
    id: 1,
    name: 'product 1',
    price: 1000
  },
  {
    id: 2,
    name: 'product 2',
    price: 2000
  },
  {
    id: 3,
    name: 'product 3',
    price: 3000
  }
]

api.get('/product',(req,res) => {})
api.post('/product',(req,res) => {})
api.put('/product:id',(req,res)=> {})
api.delete('/product',(req,res) => {})

export default api