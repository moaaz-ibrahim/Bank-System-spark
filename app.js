const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes');
const db = require('./db')

//MiddleWares
app.use(express.static('public'))
app.use(express.json())
app.use('/api/db' , routes)
app.get('/customers',(req,res)=>{
    res.sendFile(__dirname + '/public/customers.html')
})
app.get('/transfer',(req,res)=>{
    res.sendFile(__dirname + '/public/transfer.html')
})


app.listen(port , ()=>{
    
    console.log(`Listening on port ${port}`)
})

