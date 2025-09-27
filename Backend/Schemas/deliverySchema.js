const mongoose = require('mongoose')

const deliverySchema = new mongoose.Schema({
    Order : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Order',
        required : true
    },
    Status : {
        type : String,
        required : true,
        enum : ['Delivery', 'Pending', 'In progress']
    },
    Adresse : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Delivery', deliverySchema)