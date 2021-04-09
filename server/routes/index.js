const express = require('express')
const router = express.Router();
const User = require('../models/User')
const axios = require('axios')
const jwt = require('jsonwebtoken')


// //Listening to client here
app.get('/', (req, res, next) => res.send('<h1>Press to the X</h1>'));
// //Posting from client
 app.post('/login',  (req, res) => {
  console.log(req.body, '<----')

//     //Save info to DB
   Signin.create(req.body)
 })


app.get('/account', async (req, res) =>{
  let inputFromDb =  await Account.find({})
    res.send({inputFromDb})
})