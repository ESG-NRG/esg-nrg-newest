const {Schema, model} = require('mongoose')


const signinSchema = new Schema({
    input: String
})

module.exports = model('signin', signinSchema)