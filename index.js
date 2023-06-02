const express = require('express');
const {categoryRoutes } = require('./routes/userroutes');
const { default: mongoose } = require('mongoose');
const app = express();
const { db } = require('./config/db');
require('dotenv').config()

db.connect();
app.use(express.json())

app.use('/api/categories', categoryRoutes)


app.listen(3000,()=>{
console.log("okey");
});