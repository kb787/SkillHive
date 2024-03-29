let express = require('express') ;
let http = require('http') ;
let app = express() ;
let server = http.createServer(app) ;
let Connect = require('./configure') ;
const {registerRouter,loginRouter} = require('./controllers/authentication/authenticationControllers') ;
const {profileRouterPost,profileRouterGet,profileRouterUpdate,profileRouterDelete,profileRouterGetAll} = require('./controllers/profile/profileControllers') ;
const {projectRouterPost,projectRouterGet,projectRouterGetAll} = require('./controllers/project/projectControllers') ;
const MiddlewareId = require('./middlewares/MiddlewareId') ;
const {postRouter} = require('./controllers/admin/adminControllers') ;
const axios = require('axios') ;

let cors = require('cors') ;
 let corsOptions = {
  origin:"http://localhost:3000" ,
 }
{/*
 let corsOptions2 = {
    origin:"http://127.0.0.1:5000",
 }
*/}


 app.use(express.json()) ;
 app.use(cors(corsOptions)) ;
// app.use(cors(corsOptions2)) ; 
Connect() ;

app.get("/" , (req,res) => {
     res.send(" The app had started ") ;
})

app.use("/v1/api", registerRouter) ;
app.use("/v9/api",loginRouter) ;
app.use("/profile/api",profileRouterPost) ;

{/* app.use("/api",profileRouterGet,MiddlewareId) ;
app.use("/api",MiddlewareId,profileRouterUpdate) ;
app.use("/api",MiddlewareId,profileRouterDelete) ; */} // Using middlewares By Id methods 


{/*   app.use("/profiles/api",profileRouterGet) ;
app.use("/profiles/api",profileRouterUpdate) ;
app.use("/profiles/api",profileRouterDelete)  */} // Without using middlewares By Id methods

app.use("/profile/api",profileRouterGetAll) ;
app.use("/project/api",projectRouterPost) ;
// app.use("/api",MiddlewareId,projectRouterGet) ;
app.use("/api",projectRouterGet)
app.use("/project/api",projectRouterGetAll) ;


 // app.use("/v3/api/posts",postRouter) ;
 // Other methods from react-node api request
{/* app.use("/v4/api/projects",fetchApplicationRouter) ;
app.use("/v6/api/freelancersdatas",fetchDataRouter) ;
 app.use("/v7/api/userprofiles",userProfileRouter) ;
app.use("/v8/api/freelancerprojects",projectFetchRouter) ;
*/}


// Methods from node-flask api request 
{/*
app.post("/v9/api/postSkillsNode", async (req, res) => {
    const {userName, userFullName, userSkills} = req.body;
    try {
        let nameValueFromRegister = await registerModel.findOne({userName: req.body.userName});
        let nameValueFromProfile = await userProfileModel.findOne({userFullName: req.body.userFullName});
        if(nameValueFromProfile === nameValueFromRegister) {
            let skillValue = await userProfileModel.findOne({userSkills});
            let jsonSkillValue = skillValue.toJSON() ;
            axios.post("http://127.0.0.1:5000/v9/api/postSkillsFlask", jsonSkillValue,   
            {headers : {
                'Content-Type': 'application/json'
            }})
                .then(response => {
                    console.log(response.data);
                    return res.status(201).send({message: 'Found a user', jsonSkillValue , success: true});
                })
                .catch(error => {
                    console.log(error);
                    return res.status(500).send({message: 'Could not perform your request', success: false});
                });
        }
        else {
            return res.status(404).send({message: 'Complete your profile first', success: false});
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).send({message: 'Could not perform your request', success: false});
    }
});

// Methods from node-flask api request 
app.get("/v9/api/postSkillsNode",async(req,res) => {
       const {projectTitle} = req.body 
       try {
           let fetchResponse = await fetch("http://localhost:5000/v9/api/postSkillsFlask") ;
           let foundResponse = await freelancerProjectModel.findOne(fetchResponse.data === req.body.projectTitle) ;
           if(!foundResponse) {
             return res.status(404).send({message:'No object found'}) ;
           }  
           else {
               axios.post("http://127.0.0.1:5000/v12/api/postDataReact" , {foundResponse}, {headers : {
                'Content-Type': 'application/json' }}) ;
           }
       }
       catch(error) {
            console.log(error) ;
            return res.status(500).send({message:'Unable to process your request'}) ;
       }
})
*/}


server.listen(3500 , () => {
    console.log(" App launched ") ;
}
)

