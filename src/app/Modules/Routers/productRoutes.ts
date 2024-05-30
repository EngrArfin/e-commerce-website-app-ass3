import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  searchProducts,
  updateProduct,
} from '../Controllers/product'

const router = Router()

router.post('/products', createProduct)
router.get('/products', getAllProducts)
router.get('/products/:productId', getProductById)
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId', deleteProduct)
router.get('/products/search', searchProducts)

export default router
