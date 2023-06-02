const express = require('express');
const app = express();
const products = require('./data/products');

require('dotenv').config();


app.get('/',(req,res)=>{
res.send('API is running....')
})


app.get('/api/products',(req, res)=>{
    res.json(products);
})


app.get('/api/products/:id',(req, res)=>{
    const product = products.find((p)=>p._id === req.params.id )
    res.json(product);
})


const PORT = process.env.PORT || 8080;   
app.listen(PORT,()=>{
    console.log(`connected To port:${PORT}`)
})