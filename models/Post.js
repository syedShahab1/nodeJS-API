const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String
});

module.exports = mongoose.model('Posts', PostSchema);