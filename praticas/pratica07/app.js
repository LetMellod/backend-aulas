require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


const dbURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(dbURI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB Atlas com sucesso!');
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao MongoDB Atlas:', err);
  });


module.exports = app;