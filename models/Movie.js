
const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please provide movie title'],
        maxlength:50
    },
    releaseYear:{
        type:Number,
        required:[true, 'Please provide movie release year'],
        min:1900,
        max:2030
    },
    rating:{
        type:Number,
        required:[true, 'Please provide movie rating'],
        min:[0, 'Rating must be between 0 and 5'],
        max:[5, 'Rating must be between 0 and 5']
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user']
    }
},{timestamps:true})

module.exports = mongoose.model('Movie', MovieSchema)
