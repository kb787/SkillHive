const jwt = require('jsonwebtoken') ;
const dotenv = require('dotenv') ;
const bcryptjs = require('bcryptjs') ;
const userModel = require('../../models/registerModels') ;
dotenv.config() ;

const handlePostRegister = async(req,res) => 
{  
      try 
      {
        const {userName , userEmail, userPassword} = req.body ;
        console.log(req.body) ;
        if((!userName) || (!userEmail) || (!userPassword)){
            return res.status(400).send({message:"Entering all fields is mandatory",success:false}) ;
        }
        let existingUser = await userModel.findOne({userEmail : req.body.userEmail}) ;
        console.log(existingUser) ;
          if(existingUser)
           {
              return res.status(409).send({message: "User Already Exists" , success:false}) ;
           }
          else 
           { 
             const salt = await bcryptjs.genSalt(10) ;
             const hashedPassword = await bcryptjs.hash(userPassword,salt) ;
             let newUser = await new userModel({userName,userEmail,userPassword:hashedPassword}) ;
             const savedUser = await newUser.save({userName,userEmail,userPassword:hashedPassword}) ;
             let requiredUser = {
               userName:savedUser.userName ,
               userEmail:savedUser.userEmail
             }
             console.log(savedUser) ;
             return res.status(201).send({message:"Successfully saved the new user",success:true,requiredUser}) ;    
           }
    }
    catch(error)
    { 
        console.log(error) ;
        return res.status(500).send({message:"Server side error occured",success:false}) ;
    }  

}

const handlePostLogin = async(req,res) => 
{
    try {
         const {userEmail,userPassword} = req.body ;
         console.log(req.body) ;
         if((!userEmail) || (!userPassword)){
             return res.status(409).send({message:"Entering all fileds is mandatory",success:false}) ;
         }
         let prevAccount = await userModel.findOne({
              userEmail:req.body.userEmail 
         })
         if(!prevAccount)
         {
             return res.status(404).send({message:"Invalid email", success:false}) ;
         }
         let passwordComparison = await bcryptjs.compare(userPassword,prevAccount.userPassword) ;
         if(passwordComparison !== true){
            return res.status(404).send({message:"Invalid credentials",success:false}) ;
         }
         else 
         { 
             let token = jwt.sign({userId:prevAccount._id}, process.env.secret_key)
             return res.status(200).send({message:"Successfully logged in", success:true,token}) ;
         }
    }
    catch(error)
    {
         console.log(error) ;
         return res.status(500).send({message:"Unable to login",success:false}) ;
    }
}

let express = require('express') ;

let registerRouter = express.Router() ;
let loginRouter = express.Router() ;

registerRouter.post('/postRegister',handlePostRegister) ;
loginRouter.post('/postLogin', handlePostLogin) ;

module.exports = {
    registerRouter:registerRouter ,
    loginRouter:loginRouter
}





