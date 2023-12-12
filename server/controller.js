let projectModel = require("./projectModel") ;
let registerModel = require("./registerModels") ;
let postModel = require("./postModels") ;
let freelanceDataModel = require("./freelacerModels") ;
let userProfileModel = require("./profileModel") ;
let freelancerProjectModel = require("./freelancerProjectModel") ;

const handleApplyProject = async(req,res) => {
    const {projectId,projectAmount, projectDays, projectDescription} = req.body ;
    try {
          let prevProject,newProject ;
             prevProject = await projectModel.findOne({projectDescription:req.body.projectDescription}) ;
             if(prevProject)
             {
                 return res.status(409).send({message:"Could not process duplicate request",success:false}) ;
             }
             newProject = await new projectModel ({
             projectId, projectAmount,projectDays,projectDescription 
          })
         // console.log(newProject) ;
          newProject.save() ;
          return res.status(201).send({message:"Successfully saved the project", success:true, newProject}) ;
    }
    catch(error)
    {
        return res.status(500).send({message:"Unable to save project",success:false}) ;
    } 
} 

const handleGetProject = async(req,res) => {
     try {
         const {projectId,projectAmount,projectDays,projectDescription} = req.query ;
         console.log(req.query) ;
         let findProject = await projectModel.findOne({projectId 
         })
         if(findProject)
         {
            console.log(findProject) ;
            return res.status(201).json({mesage:"Successfully got the applications",sucess:true,findProject}) ;
         }
         else 
         {
            return res.status(200).json({message:"Unable to find it",success:false}) ;
         }
         
         
     }
     catch(error)
     {
         return res.status(500).send({message:"Unable to get previous applications",success:false}) ;
     }
}


const handlePostRegister = async(req,res) => 
{
   
{
    try 
    {
     const {userName , userEmail, userPassword} = req.body ;
        console.log(req.body) ;
        let existingUser = await registerModel.findOne({userEmail : req.body.userEmail}) ;
        console.log(existingUser) ;
        if(existingUser)
        {
            return res.status(200).send({message: "User Already Exists" , success:false}) ;
        }
        else 
        { 
          
           const userName = req.body.userName ;
           const userPassword = req.body.userPassword ;
           let newUser = new registerModel({
            userName,userEmail,userPassword
            }) ;
           await newUser.save({userName,userEmail,userPassword}) ;
           return res.status(201).send({message:"Successfully saved the new user",success:true}) ;    
           
        }
    }
    catch(error)
    { 
        console.log(error) ;
        return res.status(500).send({message:"Server side error occured",success:false}) ;
    }
}  

}

const handlePostLogin = async(req,res) => 
{
    try {
         const {userEmail,userPassword} = req.body ;
         console.log(req.body) ;
         let prevAccount = await registerModel.findOne({
              userEmail:req.body.userEmail 
         })
         if(!prevAccount)
         {
             return res.status(200).send({message:"Invalid email", success:false}) ;
         }
         else if(prevAccount.userPassword !== req.body.userPassword) 
         {
             return res.status(200).send({message:"Invalid email or password", success:false}) ;
         }
         else 
         {
             return res.status(201).send({message:"Successfully logged in", success:true}) ;
         }
    }
    catch(error)
    {
         console.log(error) ;
         return res.status(500).send({message:"Unable to login",success:false}) ;
    }
}

const handlePostProfile = async(req,res) => 
{
      try 
      {
          const {profId, profFirstName,profLastName,profDescription,profAge,profTechSkills,profQualification,profPortfolio} = req.body ;
          console.log(req.body) ; 
             let newProfile = new profileModel(
                {
                    profId,profFirstName,profLastName,profDescription,profAge,profTechSkills,profQualification,profPortfolio
                }   
             )
             console.log(newProfile) ;
             await newProfile.save(profId,profFirstName,profLastName,profDescription,profAge,profTechSkills,profQualification,profPortfolio) ;
             return res.status(201).send({message:"Successfully saving your profile details",success:true,newProfile}) ;
        
      }
      catch(error)
      {
          console.log(error) ;
          return res.status(500).send({message:"Unable to save profile details",success:false}) ;
      }
}

const handleGetProfile = async(req,res) => 
{
    try 
    {
        const {profId, profFirstName, profLastName, profDescription, profAge, profTechSkills,profQualification,profPortfolio} = req.body ;
        console.log(req.body) ;

        let prevAccount = await profileModel.find(
           { 
            profId, profFirstName,profLastName,profDescription,profAge,profTechSkills,profQualification,profPortfolio
           } 
        )
        console.log(prevAccount) ;
        return res.status(201).send({message:"Found your profile",success:true,prevAccount}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to find your profile",success:false}) ;
    }
}

const handlePostProjectPosts = async(req,res) => 
{
    try 
    {
        const {postId,postName,postDescription,postDays,postAmount} = req.body ;
        console.log(req.body) ;

        let postResponse = await new postModel(
            {
                postId,postName,postDescription,postDays,postAmount
            }
        )
        await postResponse.save(postId,postName,postDescription,postDays,postAmount) ;
        console.log(postResponse) ;
        return res.status(201).send({message:"Successfully posted your project",sucess:true,postResponse}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to post the project",success:false}) ;
    }
}

const handleFetchApplications = async(req,res) => {
      try {
           const {projectId,projectAmount,projectDays,projectDescription} = req.body ;
           console.log(req.body) ;
           let fetchResponse = await projectModel.find() ;
           console.log(fetchResponse) ;
           return res.status(200).send(fetchResponse) ; 
      }
      catch(error) {
           console.log(error) ;
           return res.status(404).send({message:"Unable to fetch applications data"}) ;
      }
}

const handleFetchFreelancerData = async(req,res) => {
    try {
        const {name,location,skills,description,rating} = req.body ;
        console.log(req.body) ;
         let fetchResponse = await freelanceDataModel.find()
         console.log(fetchResponse) ;
         return res.send(fetchResponse) ;
    }
    catch(error) {
         return res.status(404).send({message:"Unable to fetch the data"}) ;
    }
}

const handleProfilePosting = async(req,res) => {
    const {userName,userRole,userDescription,userPortfolio,userEducation} = req.body ;
    console.log(req.body) ;
     try {
          let prevUser = await userProfileModel.find({userName,userRole,userDescription,userPortfolio,userEducation}) ;
          if(prevUser){
              return res.status(400).send({message:"User already exists",success:false}) ;
          } 
          else {
              let newUser = new userProfileModel() ;
              console.log(newUser) ;
              let savedUser = await newUser.save() ;
              return res.status(201).send({message:"Successfully added the user",newUser,success:true}) ;
          } 
     }
     catch(error) {
         console.log(error) ;
         return res.status(500).send({message:"Unable to post into database",success:false}) ;
     }
}

const handleFetchProjects = async(req,res) => {
    const {projectTitle,projectAmount,projectDays,projectDescription} = req.body ;
    console.log(req.body) ; 
    try {
         let fetchedUser = await freelancerProjectModel.find() ;
         console.log(fetchedUser) ;
         return res.send(fetchedUser) ;
    }
    catch(error){
         console.log(error) ;
         return res.status(404).send({message:'Unable to fetch the data'}) ;
    }
}
let express = require('express') ;
let projectRouter = express.Router() ;
let registerRouter = express.Router() ;
let profileRouter  = express.Router() ;
let postRouter = express.Router() ;
let fetchApplicationRouter = express.Router() ;
let fetchDataRouter = express.Router() ;
let userProfileRouter = express.Router() ;
let projectFetchRouter = express.Router() ;


projectRouter.post('/applyProject', handleApplyProject) ;
projectFetchRouter.get('/getProject',handleFetchProjects) ;


registerRouter.post('/postRegister',handlePostRegister) ;
registerRouter.post('/postLogin', handlePostLogin) ;

profileRouter.post('/postProfile',handlePostProfile) ;
profileRouter.get('/getProfile',handleGetProfile) ;

postRouter.post('/postProject', handlePostProjectPosts) ;

fetchApplicationRouter.get('/fetchapplication',handleFetchApplications) ;
fetchDataRouter.get('/fetchfreelancerdata',handleFetchFreelancerData) ;

userProfileRouter.post('/postUserProfile',handleProfilePosting) ;

module.exports  = {
    projectRouter:projectRouter ,
    projectFetchRouter:projectFetchRouter,
    registerRouter:registerRouter ,
    profileRouter:profileRouter ,
    postRouter:postRouter ,
    fetchApplicationRouter:fetchApplicationRouter ,
    fetchDataRouter:fetchDataRouter ,
    userProfileRouter:userProfileRouter 
}

