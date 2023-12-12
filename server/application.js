var express = require('express') ;
var http = require('http') ;
var app = express() ;
var server = http.createServer(app) ;
var Connect = require('./configure') ;
const {projectRouter, registerRouter,profileRouter,postRouter,fetchApplicationRouter,fetchDataRouter,userProfileRouter,projectFetchRouter} = require('./controller') ;

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

server.listen(3500 , () => {
    console.log(" App launched ") ;
}
)

