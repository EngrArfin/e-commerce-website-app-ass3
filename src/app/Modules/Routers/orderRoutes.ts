import { Router } from 'express'
import {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
} from '../Controllers/order'

const router = Router()

router.post('/orders', createOrder)
router.get('/orders', getAllOrders)
router.get('/orders/user', getOrdersByEmail)

export default router
