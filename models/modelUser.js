const mongoose = require('mongoose');

const modelVarUser = new mongoose.Schema({
    modelFName:{
        type: String,
        required: [true, 'Firstname cannot be blank']
    },
    modelLName:{
        type: String,
        required: [true, 'Lastname cannot be blank']
    },
    modelEmail:{
        type: String,
        required: [true, 'email cannot be blank']
    },
    modelPassword:{
        type: String,
        required: [true, 'password cannot be blank']
    }
})

//Name of this model is defined to be 'User' and not modelVarUser
// User must be used as an instance while importing in server.js file as well as while peforming DB functions
module.exports = mongoose.model('User', modelVarUser);

