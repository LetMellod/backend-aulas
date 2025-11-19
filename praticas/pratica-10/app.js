const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();


const mongoose = require('mongoose');

const app = express();


const dbString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;
mongoose.connect(dbString)
  .then(() => console.log('Conexão com MongoDB Atlas estabelecida!'))
  .catch(error => console.error('Erro ao conectar ao MongoDB Atlas:', error));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;