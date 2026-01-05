

import mongoose from "mongoose";



const ConnectDB =async()=>{
    try{

        await mongoose.connect("mongodb+srv://aliimran:admin@rolebased.5frqjav.mongodb.net/?appName=RoleBased");

        console.log("DataBase Connected Successfully !")
    }catch(e){
        console.log(e);
    }
} 


export default ConnectDB;
    