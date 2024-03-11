const Mongoose = require('mongoose')
const {Schema} = require('mongoose');
Mongoose.Promise = global.Promise
const url = "mongodb://0.0.0.0:27017/TodoList"

let todoSchema= Schema({
    taskId:{type:Number, required:true, trim:true},
    taskName:{type:String, required:true, trim:true},
    taskDesc:String,
    isActive:Boolean
},{collection:"Todo"})

let collection = {}

collection.getTodoCollection = ()=>{
    return Mongoose.connect(url).then((database)=>{
        return database.model('Todo', todoSchema)
    }).catch((error)=>{
        console.log("Could not connect to DB!!")
        console.error(error);
    })
}

module.exports = collection