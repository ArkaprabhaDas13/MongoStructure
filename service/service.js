const model = require('../model/model')

const service = {}

service.getTodos = ()=>{
    return model.getAllTodos().then((data)=>{
        if(data!=null) return data;
        else return null;
    })
}
service.getTodoById = (id)=>{
    return model.getTodoById(id).then((data)=>{
        if(data!=null) return data;
        else return null;
    })
}
module.exports=service;