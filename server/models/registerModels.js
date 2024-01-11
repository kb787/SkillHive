const mongoose = require('mongoose') ;

const userSchema = mongoose.Schema(
    {
        userName :
        {
            type:String ,
          //  required:true
        } ,
        userEmail : 
        {
             type:String ,
          //   required:true ,
        } ,
        userPassword :
        {
            type:String ,
          //  required:true
        }

    }
) 

let userModel ;
if(mongoose.models.users){
    registerModel = mongoose.model('users') ;
}
userModel = mongoose.model('users',userSchema) ;

module.exports =  userModel ;