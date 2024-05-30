import mongoose, { Schema, Document } from 'mongoose'

export interface IOrder extends Document {
  email: string
  productId: mongoose.Types.ObjectId
  price: number
  quantity: number
}

const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const Order = mongoose.model<IOrder>('Order', orderSchema)

export default Order
