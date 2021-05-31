const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menSchema = new Schema({
    ranking: { type: Number, required: true, unique:true },
    name: { type: String, required: true, trim:true },
    dob: { type: Date, required: true, trim:true }, 
    country: { type: String, required: true, trim:true },
    score: { type: Number, required: true },
    event: { type: String, default:"100m" },
}, { timestamps: true });

const MensRanking =new mongoose.model('MensRanking',menSchema);

 module.exports =  MensRanking;