let mongoose = require('mongoose') ;

let freelanceDataSchema = mongoose.Schema(
    {
        name : {
            type:String 
        } ,
        location : {
            type :String 
        } ,
        skills : {
            type : String 
        } , 
        description : {
            type : String
        } ,
        rating : {
            type : String
        }
    }
)

if(mongoose.models['freelancersdatas']){
      return mongoose.model('freelancersdatas') ; 
}  

let freelanceDataModel = mongoose.model('freelancersdatas',freelanceDataSchema) ;
module.exports  = freelanceDataModel ;