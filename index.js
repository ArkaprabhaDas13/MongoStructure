const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./router/router')

const app = express();
app.use(bodyParser.json())
app.use('/',router);
app.listen(3000,()=>{
    console.log("server running on 3000")
})

module.exports = app;