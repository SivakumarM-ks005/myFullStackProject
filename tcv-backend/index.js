const express = require('express');
var cors = require('cors');
const app = express();
const  connection = require('./connection');
const userRouter = require('./routes/user');

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api/user', userRouter);
module.exports = app;