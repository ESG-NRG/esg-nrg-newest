const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const cors = require('cors')
const bodyParser = require('body-parser');
const Signin = require('./Models/Signin');


app.use(cors())//connects to front end
app.use(bodyParser.json())//reads data in post


//Connecting to backend
mongoose 
    .connect('mongodb+srv://stephanie:stephanie@cluster0.iaiqv.mongodb.net/myesgnrg?retryWrites=true&w=majority')
    .then(res => console.log('_______8000______'))
    .catch(err => console.error(err))





//Listening to client here
app.get('/', (req, res, next) => res.send('<h1>Press to the X</h1>'));
//Posting from client
app.post('/login',  (req, res) => {
    console.log(req.body, '<----')

    //Save info to DB
   Signin.create(req.body)
})


app.get('/account', async (req, res) =>{
  let inputFromDb =  await Account.find({})
    res.send({inputFromDb})
})



//Server Started
// app.listen(8000, () => console.log('yo yo yo im on 8000'));
// app.use(express.static('client'))


app.listen(PORT)