import mongoose, { Schema, Document } from 'mongoose'

interface IVariant {
  type: string
  value: string
}

interface IInventory {
  quantity: number
  inStock: boolean
}

export interface IProduct extends Document {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  variants: IVariant[]
  inventory: IInventory
}

const variantSchema = new Schema<IVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
})

const inventorySchema = new Schema<IInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
})

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
})

const Product = mongoose.model<IProduct>('Product', productSchema)

export default Product
