var express = require('express') ;
var http = require('http') ;
var app = express() ;
var server = http.createServer(app) ;
var Connect = require('./configure') ;
const {projectRouter, registerRouter,profileRouter,postRouter,fetchApplicationRouter,fetchDataRouter,userProfileRouter,projectFetchRouter} = require('./controller') ;
let axios = require('axios') ;

var cors = require('cors') ;
 var corsOptions = {
  origin:"http://localhost:3000" ,
 }


 app.use(express.json()) ;
 app.use(cors(corsOptions)) ; 
Connect() ;

app.get("/" , (req,res) => {
     res.send(" The app had started ") ;
})

app.use("/v5/api/projects", projectRouter) ;
app.use("/v1/api/users", registerRouter) ;
app.use("/v2/api/profiles",profileRouter) ;
app.use("/v3/api/posts",postRouter) ;
app.use("/v4/api/projects",fetchApplicationRouter) ;
app.use("/v6/api/freelancersdatas",fetchDataRouter) ;
app.use("/v7/api/userprofiles",userProfileRouter) ;
app.use("/v8/api/freelancerprojects",projectFetchRouter) ;


app.post("/v9/api/postSkillsNode", async (req, res) => {
    const {userName, userFullName, userSkills} = req.body;
    try {
        let nameValueFromRegister = await registerModel.findOne({userName: req.body.userName});
        let nameValueFromProfile = await userProfileModel.findOne({userFullName: req.body.userFullName});
        if(nameValueFromProfile === nameValueFromRegister) {
            let skillValue = await userProfileModel.findOne({userSkills});
            axios.post("http://localhost:5000/v9/api/postSkillsFlask", {skillValue})
                .then(response => {
                    console.log(response.data);
                    return res.status(201).send({message: 'Found a user', skillValue, success: true});
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




server.listen(3500 , () => {
    console.log(" App launched ") ;
}
)

