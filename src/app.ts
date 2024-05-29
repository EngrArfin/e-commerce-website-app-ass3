import bodyParser from 'body-parser'
import productRoutes from './app/Routers/productRoutes'
import orderRoutes from './app/Routers/orderRoutes'
import connectDB from './app/Modules/Ecommers/connection'

import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

/* const port = 3000 */

app.use(bodyParser.json())
app.use('/api', productRoutes)
app.use('/api', orderRoutes)

//persers
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('welcome Ecommerce website')
})
connectDB()
export default app
