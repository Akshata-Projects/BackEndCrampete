const express = require("express")
const router = express.Router()

// creating router
router.get("/home",(req, res)=>{
    res.send("<h1> Home Page </h1>")
})

router.get("/products",(req, res)=>{
    res.send("<h1> Products Page </h1>")
})

module.exports = router