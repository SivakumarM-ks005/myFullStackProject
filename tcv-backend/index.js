const express = require('express');
var cors = require('cors');
const app = express();
const  connection = require('./connection');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
module.exports = app;