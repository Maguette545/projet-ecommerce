const mongoose = require('mongoose')
const { validate } = require('./UserSchema')

const orderSchema = new mongoose.Schema({
    RefOrder : {
        type : String,
        required : true
    },
     Status : {
        type : String,
        required : true,
        default : 'Not validate',
        enum : ['validate', 'Not validate']
    },
     UserOrder : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User', 
        required : false
    },
    ProductOrder : [{
        ProductId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product',
            required : true
        },
        quantity : {
            type : Number,
            required : true
        }
    }],
     TotalAmount : {
        type : Number,
        required : true
    },
    AdresseDelivery : {
        type : String,
        required : true
    },
    UserAnonymous : {  // Pour les utilisateurs non inscrit
        UserFullName : String,
        UserEmail : String,
        UserTelephone : Number
    }
},
{
    timestamps : true //Pour la creation automatique du formulaire de commande et de sa mise à jour    
})

module.exports = mongoose.model('Order', orderSchema)