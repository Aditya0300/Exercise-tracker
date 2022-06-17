const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI=process.env.ATLAS_URI;

mongoose.connect(URI);

const connection=mongoose.connection;
connection.once('open', ()=> {
    console.log('mongodb connected sucessfully');
})

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`);
});