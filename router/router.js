const express = require('express');
const router = express.Router();
const setupDB = require("../model/setupDB");
const service= require("../service/service")
router.get('/setup', (req, res, next) => {
    setupDB.todoSetup().then((data) => {
        res.send(data);
        res.status = 200;
    }).catch(err=>next(err))
})
router.get('/todos', (req,res,next)=>{
    return service.getTodos().then((data)=>{
        res.json(data);
        res.status(200)
    }).catch(err=>next(err))
})
router.get('/getTodosById/:id', (req,res,next)=>{
    const id=req.params.id;
    return service.getTodoById(id).then((data)=>{
        res.json(data);
        res.status(200)
    }).catch(err=>next(err))
})
module.exports=router;