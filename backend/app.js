// MONGODB PW:qA7nYyJbMViUzNEm

const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require("mongoose");

const stuffRoutes = require('./routes/stuff');
const authRoutes = require('./routes/user');
const app = express();

const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});


mongoose
  .connect(process.env.DB, {useNewUrlParser: true,} )
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(bodyParser.json());
app.use('/api/stuff', stuffRoutes )
app.use('/api/auth', authRoutes )

module.exports = app;