const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: {type:String, default:'Garfield', required:true},
    color: String,
    age: Number,
    owner: Schema.Types.ObjectId
});

const Cat = mongoose.model('Cat', catSchema);
module.exports = 33;