var mongoose = require('mongoose') ;

var registerSchema = mongoose.Schema(
    {
        userName :
        {
            type:String ,
            required:true
        } ,
        userEmail : 
        {
             type:String ,
             required:true ,
        } ,
        userPassword :
        {
            type:String ,
            required:true
        }

    }
) 

if(mongoose.models['users']) 
{
    return mongoose.model('users') ;
}

var registerModel = mongoose.model('users',registerSchema) ;
module.exports = registerModel ;