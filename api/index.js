const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require('./routes/user');
const transactionRoute = require('./routes/transaction');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(console.log("MongoDB Up and running!!!"))
.catch((err)=> console.log(err));

app.use("/api/user",userRoute)
app.use("/api/transaction",transactionRoute)
app.listen("5000",()=>{
    console.log("Backend up and running!!!");
})