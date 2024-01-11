const profileModel = require('../../models/profileModel') ;

const handleProfilePosting = async(req,res) => {
    try {  
             const {userFullName,userRole,userDescription,userSkills,userPortfolio,userEducation} = req.body ;
             console.log(req.body) ;  
             let newUser = await new profileModel({userFullName,userRole,userDescription,userSkills,userPortfolio,userEducation},process.env.secret_key) ;
             let savedUser = await newUser.save() ;
             let token = jwt.sign({userId:profileModel._id,userFullName,userRole,userDescription,userSkills,userPortfolio,userEducation},process.env.secret_key) ;
             console.log(savedUser) ;
             return res.status(201).send({message:"Successfully added the user",savedUser,success:true,token}) ;
         } 
    catch(error) {
        console.log(error) ;
        return res.status(500).send({message:"Unable to post into database",success:false}) ;
    }
} 

const handleGetProfileById = async(req,res) => {
    const {_id} = req.params ;
    try {
        const foundObject = await profileModel.findById({_id}) ;
        if(!foundObject){
           return res.status(404).send({message:"The required object doesnot exists"}) ;
        }
        else {
          console.log(foundObject) ;  
          return res.status(200).send({foundObject}) ; 
        }
    }
    catch(error){
        console.log(error) ;
        return res.status(500).send({message:'Unable to perform your request'}) ;
    }
}

const handleUpdateProfileById = async(req,res) => {
    const {_id} = req.params ;
    try {
        let updatedObject = await profileModel.findByIdAndUpdate({_id})
        if(!updatedObject){
            return res.status(409).send({message:"Unable to update the profile"}) ;
        }
        else {
             console.log(updatedObject) ;
             return res.status(201).send({message:"Profile updated successfully",success:true})
        }
    }
    catch(error){
          console.log(error) ;
          return res.status(500).send({message:"Unable to perform the request"}) ;
     }
}

const deleteProfileById = async(req,res) => {
    const {_id} = req.params ;
    try {
       let deletedObject = await profileModel.findByIdAndDelete({_id}) ;
       if(!deletedObject){
         return res.status(409).send({message:"Unable to delete the profile"}) ;
       }
       else {
          return res.status(201).send({message:"Successfully deleted your profile",deletedObject}) ;
       }
    }
    catch(error){
        console.log(error) ;
        return res.status(500).send({message:"Unable to perform the request"}) ;
    }
}

const handleGetAllProfileAdmin = async(req,res) => {
    try {
        let requiredObject = await profileModel.find() ;
       if(!requiredObject){
         return res.status(409).send({message:"Unable to get profile details"}) ;
       }
       else {
          return res.status(201).send({requiredObject}) ;
       }
    }
    catch(error){
        {
            console.log(error) ;
            return res.status(500).send({message:"Unable to perform the request"}) ;
        }
    }
}

let express = require('express') ;

let profileRouterPost  = express.Router() ;
let profileRouterGet = express.Router() ;
let profileRouterUpdate = express.Router() ;
let profileRouterDelete = express.Router() ;
let profileRouterGetAll = express.Router() ;

profileRouterPost.post('/postProfile',handleProfilePosting) ;
profileRouterGet.put(`/updateProfile/:_id`,handleUpdateProfileById) ;
profileRouterUpdate.get(`/getIndividualProfile:_id`,handleGetProfileById) ;
profileRouterDelete.delete(`/deleteIndividualProfile:_id`,deleteProfileById) ;
profileRouterGetAll.get(`/getAllProfile`,handleGetAllProfileAdmin) ;


module.exports = {
    profileRouterPost:profileRouterPost,
    profileRouterGet:profileRouterGet,
    profileRouterUpdate:profileRouterUpdate,
    profileRouterDelete:profileRouterDelete,
    profileRouterGetAll:profileRouterGetAll
}
// profileRouter.get('/getProfile',handleGetProfile) ;












