const express = require("express")
const app= express()
const getRoutes = require("./Routes/getMethod")
const ssr = require("./Routes/handlebars")
const jde = require("./Routes/jadeEngine")

app.set("view engine","jade")
app.use("/",getRoutes)
app.use("/",ssr)
app.use("/", jde)
app.listen(3000, ()=>{
    console.log("Server started")
})

// Template Engines