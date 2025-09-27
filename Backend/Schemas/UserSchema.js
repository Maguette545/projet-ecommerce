const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    FullName : {
        type : String,
        require : true
    },
    Email: {
        type : String,
        require : true
    },
    PassWord : {
        type : String,
        require : true,
    },
    Telephone : {
        type : String,
        require : true
    },
    Adresse : {
        type : String,
        require : true
    },
    Role : {
        type : String,
        enum : ['Client', 'Admin'],
        default : 'Client'
    }
})

module.exports = mongoose.model('User', userSchema)