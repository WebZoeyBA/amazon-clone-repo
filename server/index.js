// Creating an API

//IMPORTS FROM PACKAGES
const express = require ('express');
const mongoose = require ('mongoose');

//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');

//INIT
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://Faris:fssc1923nsaBA@cluster0.najngap.mongodb.net/?retryWrites=true&w=majority";

//CLIENT -> MIDDLEWARE -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);

//Connections
mongoose.connect(DB).then (() => {
console.log("connection succesful");
}).catch(e => {
    console.log(e);
});


app.listen(PORT, () => {
    console.log ("connected at port ${PORT}");
}); //localhost