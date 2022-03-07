const express = require('express')
const mongoose =require('mongoose')
 require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 8070 ;

app.use(cors())
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL );

const connection = mongoose.connection;
connection.once("open" , () => {
    console.log("MongoDB connection success !"); 
})

const taskRouter = require("./src/route/tasks")

app.use("/tasks" , taskRouter);

app.listen(PORT , () => {
    console.log(`Server is up and running on ${PORT}`);
})