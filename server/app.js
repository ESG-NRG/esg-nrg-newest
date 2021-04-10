require('dotenv').config();
const auth = require('./routes/auth');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', auth);

//Connecting to backend

async function connect() {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect('mongodb://localhost/ESG-NRG', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log('Mongoose error', err);
  }
  app.listen(process.env.PORT);
  console.log(`Listening on:${process.env.PORT}`);
}

connect();
