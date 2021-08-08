const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attributeSchema = new Schema({
    "id" : {
        type: Number
    },
    "name" : {
        type: String
    },
    "birthday" : {
        type: String
    },
    "occupation" : {
        type: String
    },
    "img" : {
        type: String
    },
    "status" : {
        type: String
    },
    "nickname" : {
        type: String
    },
    "appearance" : {
        type: String
    },
    "portrayed" : {
        type: String
    },
    "category" : {
        type: String
    }
}, { timestamps: true })

const Favourite = mongoose.model('Favourite', attributeSchema);
module.exports = Favourite;