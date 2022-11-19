let mongoose = require('mongoose');
//create a Songs model
let songsModel = mongoose.Schema({
    name: String,
    artist: String
},
{
    collection: "playlist"
});