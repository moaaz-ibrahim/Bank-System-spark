const router=  require('express').Router();
const db = require('../db')


router.get('/allCustomers' , async(req,res)=>{
    var query = db.allCustomer();
    query = JSON.parse(query);
    // console.log(query)
    res.json({
        query
    })

})

router.post('/newCustomer' , async(req,res)=>{
    var query = db.newCustomer(req.body.username , req.body.email , req.body.balance);
    // query = JSON.parse(query)
    // console.log(query)
    res.json({
        query
    })
})

router.post('/addBalance' , async(req,res)=>{
    const query = db.addBalance(req.body.username , req.body.balance);
    res.json({query})
})



module.exports = router 