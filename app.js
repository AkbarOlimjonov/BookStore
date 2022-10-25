const express = require('express');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;
const connecting = require('./helper/connect');
connecting(process.env.MONGO_URI)

//mongodb+srv://Akbarshox:<password>@cluster0.1cfxxcc.mongodb.net/BookStore

//Routes import
const homeRouter = require('./routes/home');
const productsRouter = require('./routes/products');



//Routes
app.use('/',homeRouter);
app.use('/products',productsRouter);



app.listen(3000, () => {
    console.log(`Server worked https://localhost:${port}`);
})