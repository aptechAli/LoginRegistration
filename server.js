// Registration and Login API
// Registration Api -- POST
// Login Api -- GET

import express from 'express'

const app = express();




// API : http://localhost:5000/registration
// METHOD: POST 
// DESCRIPTION : 

app.post("/registration",(req,res)=>{
    return res.send("user registration api")
})






// Listen

app.listen(5000,()=>{
    console.log("Server is running Successfully !")
})