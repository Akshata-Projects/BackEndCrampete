
// These 2 lines required to create api
const express = require("express");
const app = express()
const bodyparser = require("body-parser");

// use is a methos which is used for calling the body parser method.
app.use(bodyparser.json() )


app.get("/home",(req, res)=>{
    console.log(req.body)
    res.send("<h1> Home Page </h1>")
})
app.get("/", (req, res)=>{
    // in JSON Format
    res.send("[{fname: `Peter`, reg:1234}, {fname: Georage, 56909}]")
})

// for the data which is searched through url like "search?q=react..."
app.get("/products",(req, res)=>{
    const querydata = req.query
    console.log(querydata)
    // res.send("Done with querydata")
    if(querydata.prname==="redmi"&& Number(querydata.price)<=20000)
    {
        res.send("Note Pro")
    }
    res.send("test")
})


//---------------------PARMS-----------------
/*app.get("/search/:prname/:price",(req,res)=>{
    //console.log(req.params)
    const parameters = req.params
    if(parameters.prname === "redmi" && parameters.price === 2000)
    {
        res.send("<h1> success </h1>")
    } 
})*/

// using postman post method
app.post("/login",(req, res)=>{
    const data = req.body
    if(data.username==="john" && data.password==="password@123")
    {
        res.send("Signed in successfully")
    }else{
        res.send("Username or Password doesnot  match")
    }
})

// code for the routes/ pages which are not available
app.all("*", (req, res) => {
    res.send("<h2> 404 Error : Page Not Found</h2>")
})

// creating server
        //port number, callback()
app.listen(3000, ()=>{
    console.log("server started")
})
