import axios from 'axios' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import {useState} from 'react' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faClipboard, faBriefcase, faUser,faRightFromBracket,faRightToBracket} from '@fortawesome/free-solid-svg-icons' ;
import {Link} from 'react-router-dom' ;
import Header from './Header';

const Register = () => 
{

  const [userName, setUserName] = useState('') ;
  const [userEmail, setUserEmail] = useState('') ;
  const [userPassword, setUserPassword] = useState('') ;

  var nav = useNavigate();

  const handlePostReg = async() => 
  {
      try 
      {
         var regRes = await axios.post("http://localhost:3500/v1/api/users/postRegister",
         {
            userName : userName ,
            userEmail:userEmail ,
            userPassword:userPassword  
         }
         )
         console.log(regRes) ;
         if(regRes.data && regRes.data.success)
         {
             message.success(" Successfully registered ") ;
             nav("/HomepageUser") ;
         }
      //   else 
      //   {
      //      message.error(" Unable to register ") ;
      //   }
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
      <h3 className = "registerHeading">
        Enter your registration details
      </h3>
       <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your name"
      required={true}
      value={userName}
      onChange={e =>  setUserName(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="email"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email"
      required={true}
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
  <button type="button" className="registerButton" onClick={handlePostReg}>
    Register
  </button>
  <Link to = "/Login" className = "paraLinking">
  <p className="registerPara">
    Already registered ! login
  </p>
  </Link>
     </div> 
     </div> 
  )   
}

export default Register ;