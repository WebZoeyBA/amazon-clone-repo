// Creating an API

//IMPORTS FROM PACKAGES
const express = require ('express');
const mongoose = require ('mongoose');
const adminRouter = require('.routes/admin');

//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//INIT
const app = express();
const PORT = process.env.PORT ||3000;
const DB = "mongodb+srv://Faris:fssc1923nsaBA@cluster0.najngap.mongodb.net/?retryWrites=true&w=majority";

//CLIENT -> MIDDLEWARE -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//Connections
mongoose.connect(DB).then (() => {
console.log("connection succesful");
}).catch(e => {
    console.log(e);
});


app.listen(PORT, "0.0.0.0", () => {
    console.log ("connected at port ${PORT}");
}); //localhost