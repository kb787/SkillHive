const projectModel = require('../../models/projectModel') ;

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

const handleGetProjectById = async(req,res) => {
     try {
         const {_id} = req.query ;
         console.log(req.query) ;
         let findProject = await projectModel.findOne({_id})
         if(findProject)
         {
            console.log(findProject) ;
            return res.status(201).json({findProject}) ;
         }
         else 
         {
            return res.status(200).json({message:"Unable to find it"}) ;
         }
           
     }
     catch(error)
     {
         return res.status(500).send({message:"Unable to get previous applications",success:false}) ;
     }
}

const handleFetchAllProjects = async(req,res) => {
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
let projectRouterPost = express.Router() ;
let projectRouterGet = express.Router() ;
let projectRouterGetAll = express.Router() ;

projectRouterPost.post('/applyProject', handleApplyProject) ;
projectRouterGet.get(`/getProjectIndividual/:_id`,handleGetProjectById) ;
projectRouterGetAll.get('/getAllProject',handleFetchAllProjects) ;
