var mongoose = require('mongoose') ;

const freelancerProjectSchema = mongoose.Schema(
    {
        projectTitle : {
            type:String 
        } ,
        projectAmount : 
        {
            type:Number,
            required:true 
        } ,
        projectDays :
        {
            type:Number ,
            required:true  
        } ,
        projectDescription : 
        {
            type:String ,
            required:true 
        }

    }
) 
let freelancerProjectModel ;
if(mongoose.models.freelancerprojects)
{
    freelancerProjectModel = mongoose.model('freelancerprojects') ;
}
freelancerProjectModel = mongoose.model('freelancerprojects',freelancerProjectSchema) ;
module.exports = freelancerProjectModel ;