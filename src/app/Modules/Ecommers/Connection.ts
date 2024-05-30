import mongoose from 'mongoose'
import dotenv from 'dotenv'
import config from '../../config'

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Website connect in Mongobd connected')
  } catch (error) {
    console.error('Mongodb connection error:', error)
    process.exit(1)
  }
}

export default connectDB
