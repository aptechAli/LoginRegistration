

import mongoose from "mongoose";


const UserSchema = mongoose.Schema({


    username:{
        type:"String"
    },
    useremail:{
        type:"String",
        unique:true
    },
    userpass:{
        type:"String",
      
    }

})


var userDataSchema = mongoose.model("User",UserSchema)


export default userDataSchema;


