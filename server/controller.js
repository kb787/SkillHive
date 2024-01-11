
const userModel = require("./models/registerModels") ;
const postModel = require("./models/postModels") ;
const freelanceDataModel = require("./models/freelacerModels") ;
const userProfileModel = require("./models/profileModel") ;
const freelancerProjectModel = require("./models/freelancerProjectModel") ;


const handlePostProfile = async(req,res) => 
{
      try 
      {
          const {profId, profFirstName,profLastName,profDescription,profAge,profTechSkills,profQualification,profPortfolio} = req.body ;
          console.log(req.body) ; 
             let newProfile = new userProfileModel(
                {
                    profId,profFirstName,profLastName,profDescription,profAge,profTechSkills,profQualification,profPortfolio
                }   
             )
             console.log(newProfile) ;
             await newProfile.save(profId,profFirstName,profLastName,profDescription,profAge,profTechSkills,profQualification,profPortfolio) ;
             let profileToken = jwt.sign({userId:newProfile._id}, process.env.secret_key)
             return res.status(201).send({message:"Successfully saving your profile details",success:true,profileToken}) ;
        
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



    





let fetchApplicationRouter = express.Router() ;
let fetchDataRouter = express.Router() ;
let userProfileRouter = express.Router() ;
let projectFetchRouter = express.Router() ;









fetchApplicationRouter.get('/fetchapplication',handleFetchApplications) ;
fetchDataRouter.get('/fetchfreelancerdata',handleFetchFreelancerData) ;

userProfileRouter.post('/postUserProfile',handleProfilePosting) ;


module.exports  = {
    projectRouter:projectRouter ,
    projectFetchRouter:projectFetchRouter,
    registerRouter:registerRouter ,
    loginRouter:loginRouter,
    profileRouter:profileRouter ,
    postRouter:postRouter ,
    fetchApplicationRouter:fetchApplicationRouter ,
    fetchDataRouter:fetchDataRouter ,
    userProfileRouter:userProfileRouter ,
}

