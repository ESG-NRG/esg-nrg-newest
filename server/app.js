const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const cors = require('cors')

const Signin = require('./models/Signin');


app.use(cors())//connects to front end
app.use(express.urlencoded({ extended: false }));
app.use(express.json())//reads data in post


//Connecting to backend
mongoose 
    .connect('mongodb+srv://stephanie:stephanie@cluster0.iaiqv.mongodb.net/myesgnrg?retryWrites=true&w=majority')
    .then(res => console.log('_______8000______'))
    .catch(err => console.error(err))


    app.use(
      cors({
        credentials: true,
        origin: ['http://localhost:3000'], //Swap this with the client url
      })
    );
    
    
    // app.use(express.static(path.join(__dirname, '../frontend/build')));
    
    // app.use('/api', require('./routes'));

    
    // app.get('*', (req, res, next) => {
    //   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    // });
    
    app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
    




//Server Started
// app.listen(8000, () => console.log('yo yo yo im on 8000'));
// app.use(express.static('client'))
