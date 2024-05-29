import { Request, Response } from 'express'

import Joi from 'joi'
import Product from '../Modules/Ecommers/EcommerceProductMaintain'
import Order from '../Modules/Ecommers/EcommerceOrder'

const orderSchema = Joi.object({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
})

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { error } = orderSchema.validate(req.body)
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message })

    const product = await Product.findById(req.body.productId)
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' })

    if (product.inventory.quantity < req.body.quantity) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'Insufficient quantity available in inventory',
        })
    }

    product.inventory.quantity -= req.body.quantity
    if (product.inventory.quantity === 0) {
      product.inventory.inStock = false
    }
    await product.save()

    const order = new Order(req.body)
    await order.save()

    res
      .status(201)
      .json({
        success: true,
        message: 'Order created successfully!',
        data: order,
      })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
    res
      .status(200)
      .json({
        success: true,
        message: 'Orders fetched successfully!',
        data: orders,
      })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string
    const orders = await Order.find({ email })
    res
      .status(200)
      .json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: orders,
      })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}
