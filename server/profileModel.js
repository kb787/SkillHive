let mongoose = require('mongoose') ;

let profileSchema = mongoose.Schema({
       userName : {
          type:String 
       } ,
       userRole : {
           type:String 
       } ,
       userDescription : {
           type :String
       } ,
       userPortfolio : {
           type : Object
       } ,
       userEducation : {
           type : String
       } 

})
let userProfileModel ;
if(mongoose.models.userprofiles){
    userProfileModel = mongoose.model('userprofiles') ;
} 

userProfileModel = mongoose.model('userprofiles',profileSchema) ;
module.exports = userProfileModel ;