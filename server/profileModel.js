let mongoose = require('mongoose') ;

let profileSchema = mongoose.Schema({
       userFullName : {
          type:String 
       } ,
       userRole : {
           type:String 
       } ,
       userDescription : {
           type :String
       } ,
       userSkills : {
           type : Array
       } ,
       userPortfolio : {
           type : String
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