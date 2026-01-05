// Registration and Login API
// Registration Api -- POST
// Login Api -- GET

import express from 'express'

// password hashing package
import bcrypt from 'bcryptjs';


// Database connectivity
import ConnectDB from './DB/ConnectionDB.js';


// Model
import userDataSchema from './Model/UserModel.js';

const app = express();


app.use(express.json());



// API : http://localhost:5000/registration
// METHOD: POST 
// DESCRIPTION : User Registration API

app.post("/registration",async(req,res)=>{

    const { username , useremail, userpass  } = req.body;
    
    const Salt = await bcrypt.genSalt(10);
    
    var hashpass = await bcrypt.hash(userpass,Salt)
  
    if(!username || !useremail || !userpass ){
        return res.send("All Fields need to fill !!");
    }

    var newUserData = {
        username,
        useremail,
       userpass: hashpass
    }

// -- mongo tak jaiga data save hunekelie
    await userDataSchema.create(newUserData)

    return res.send(newUserData)
})


// API : http://localhost:5000/login
// METHOD: POST 
// DESCRIPTION : User Login API


app.post("/login",async(req,res)=>{

    const {useremail, userpassword} = req.body;

    if(!useremail || !userpassword){
        return res.send("Kindly fill all the fields.")
    }


   var UserAvail =  await userDataSchema.findById("695bd3fe96f1947c5095e1cc");

    return res.send(UserAvail)

})





// Listen

app.listen(5000,()=>{
    ConnectDB();
    console.log("Server is running Successfully !")
})