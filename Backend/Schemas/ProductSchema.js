const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Name :{
        type : String,
        required :true
    },
    Price :{
        type : Number,
        required :true
    },
    Description :{
        type : String,
        required :true
    },
    Image : [String],
    Genre :{
        type : String,
        enum : ['Homme','Femme','Enfant'],
        required :true
    },
    Style :{
        type : String,
        enum : ['Traditionnel','Moderne','Décontracté'],
        required :true
    },
    Stock :{
        type : Number,
        default : 0
    },
    DateAjout :{
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model('Product', productSchema);