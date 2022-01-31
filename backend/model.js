const mongoose = require('mongoose');


const ContactNames =mongoose.Schema({

    firstName : {
        type : String,
        required : true
    },
     lastName : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    checkbox : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('userdb',ContactNames)
