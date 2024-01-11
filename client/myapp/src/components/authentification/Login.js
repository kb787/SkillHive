import axios from 'axios' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import {useState} from 'react' ;
import {Link} from 'react-router-dom' ;
import Header from '../general/Header' ;

const Login = () => 
{

  const [userEmail, setUserEmail] = useState('') ;
  const [userPassword, setUserPassword] = useState('') ;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleValidationLogin = () => {
      if((!userEmail) || (!userPassword)){
          alert("Entering all fields is mandatory") ;
          message.error("Registration failed") ;
      }
      else if(validEmail.test(userEmail) !== true){
          alert("Enter a valid email address") ;
          setUserEmail('') ;
          message.error("Registration failed") ;
      }
      
  }

  var nav = useNavigate();

  const handlePostLog = async() => 
  {
     handleValidationLogin() ;
      try 
      {
         var regRes = await axios.post("http://localhost:3500/v9/api/postLogin",
         {
            userEmail:userEmail ,
            userPassword:userPassword  
         }
         )
         console.log(regRes) ;
         if(regRes.data && regRes.data.success)
         {
             message.success(" Successfully logged in ") ;
             nav("/HomepageUser") ;
         }
         else 
         {
           message.error(" Invalid Credentials ") ;
         }
      }
      catch(error)
      {
         console.log(error) ;
         message.error(" Server side error had occured ") ;
      }
  } 
    return (  
    <div className = "RegisterContainer">  
     <Header/>  
     <div className = "Register">
      <div className = "registerForm">
      <h3 className = "registerHeading">
        Verify your credentials
      </h3>
  <div className="registerForm">
    <input
      type="email"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email"
      required="true"
      value={userEmail}
      onChange={e =>  setUserEmail(e.target.value)}    
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="password"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your password"
      required="true"
      value={userPassword}
      onChange={e =>  setUserPassword(e.target.value)} 
    />
  </div>
  <br />
  <Link to = "/Register" className = "paraLinking">
  <p className="registerPara">
    Unable to login ! register first
  </p>
  </Link>
  <button type="button" className="registerButton" onClick={handlePostLog}>
    Login
  </button>
  </div> 
  </div>
  </div>
  )   
}

export default Login ;