var mongoose = require('mongoose') ;

var postSchema = mongoose.Schema(
    {
         postId :
         {
              type:String ,
            //  required:true    
         } ,
         postName :
         {
             type:String ,
            // required:true 
         } ,
         postDescription :
         {
             type:String ,
            // required:true 
         } ,
         postDays :
         {
             type:Number ,
            // required:true 
         } ,
         postAmount :
         {
             type:Number ,
            // required:true 
         }
    }
)

if(mongoose.models['posts'])
{
    return mongoose.model('posts') ;
}

var postModel = mongoose.model('posts',postSchema) ;
module.exports = postModel ;

