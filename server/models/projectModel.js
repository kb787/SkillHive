var mongoose = require('mongoose') ;

const projectSchema = mongoose.Schema(
    {
        projectId : {
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
let projectModel ;
if(mongoose.models.projects)
{
    projectModel = mongoose.model('projects') ;
}
projectModel = mongoose.model('projects',projectSchema) ;
module.exports = projectModel ;