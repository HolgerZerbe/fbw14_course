const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    pages: Array
})

module.exports=mongoose.model('User', userSchema);  