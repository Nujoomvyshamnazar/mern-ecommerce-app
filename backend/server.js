import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const app = express();
import connectDB from './config/db.js'
//import products from './data/products.js'




// routes

import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB()




app.use('/api/products',productRoutes)

app.use(notFound)

app.use(errorHandler)
    


const PORT = process.env.PORT || 8080;   
app.listen(PORT,()=>{
    console.log(`connected To port:${PORT}`)
})