import { Request, Response } from 'express'

import Joi from 'joi'
import Product from '../Ecommers/EcommerceProductMaintain'

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),

  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array()

    .items(
      Joi.object({
        type: Joi.string().required(),
        value: Joi.string().required(),
      })
    )
    .required(),
  inventory: Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required(),
  }).required(),
})

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { error } = productSchema.validate(req.body)
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message })

    const product = new Product(req.body)
    await product.save()

    res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      data: product,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: products,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.productId)
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' })

    res.status(200).json({
      success: true,
      message: 'Fetched Product  successfully!',
      data: product,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { error } = productSchema.validate(req.body)
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message })

    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    )
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' })

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: product,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId)
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' })

    res
      .status(200)
      .json({ success: true, message: 'Product deleted successfully!' })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string
    const products = await Product.find({
      name: { $regex: searchTerm, $options: 'i' },
    })
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: products,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}
