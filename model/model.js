const connection = require('../utilities/connection')

let todoModel = {}

todoModel.getAllTodos = ()=>{
    return connection.getTodoCollection().then((collection)=>{
        return collection.find({},{_id:0,__v:0}).then((todo)=>{
            if(todo!=null){
                return todo;
            }
            else{
                return null;
            }
        })
    })
}
todoModel.getTodoById = (id)=>{
    return connection.getTodoCollection().then((collection)=>{
        return collection.find({taskId:id},{_id:0,__v:0}).then((todo)=>{
            if(todo!=null){
                return todo;
            }
            else{
                return null;
            }
        })
    })
}
module.exports=todoModel;