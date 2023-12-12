var mongoose = require('mongoose') ;
var colors = require('colors') ;
var dotenv = require('dotenv') ;

dotenv.config() ;
const Connect = async() => 
{
    try 
    {
        await mongoose.connect(process.env.mongodb_uri );
      /*  {
            useNewUrlParser:true ,
            useUnifiedTopology:true 
        } */
       
        console.log(`Successfully connected to database`.bgGreen ) ;
    } 

    catch(error)
    {
        console.log(error) ;
        console.log(`Could not connect to database`.bgRed) ;  
    }
}

module.exports = Connect ;
