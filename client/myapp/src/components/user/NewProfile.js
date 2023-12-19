import axios from 'axios' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import {useState} from 'react' ;
import {Link} from 'react-router-dom' ;
import HeaderUser from './HeaderUser';
import {MultiSelect} from 'react-multi-select-component' ;
const NewProfile = () => 
{
      const [userFullName,setUserFullName] = useState('') ;
      const [userRole,setUserRole] = useState('') ;
      const [userDescription,setUserDescription] = useState('') ;
      const [userSkills,setUserSkills] = useState([]) ;
      const [userPortfolio,setUserPortfolio] = useState('') ;
      const [userEducation,setUserEducation] = useState('') ;


      const options = [
           {label:"React.Js",value:"react.js"},
           {label:"Angular.Js",value:"angular.js"},
           {label:"Vue.Js",value:"vue.js"},
           {label:"Tailwind.Css",value:"tailwind.css"} ,
           {label:"Figma",value:"figma"},
           {label:"Node.Js",value:"node.js"},
           {label:"Django",value:"django"},
           {label:"SpringBoot",value:"springboot"},
           {label:"PHP",value:"php"},
           {label:"MySQL",value:"mysql"},
           {label:"MongoDB",value:"mongodb"},
           {label:"Docker",value:"docker"},
           {label:"Kuberenetes",value:"kubernetes"},
           {label:"AWS",value:"aws"},
           {label:"PostmanAPI",value:"postmanapi"},
           {label:"Flutter",value:"flutter"},
           {label:"ReactNative",value:"reactnative"},
           {label:"HTML/CSS",value:"html/css"},
           {label:"Javascript",value:"javscript"},
           {label:"Java",value:"java"},
           {label:"Python",value:"python"},
           {label:"Github",value:"github"},
           {label:"IDE",value:"ide"},
      ]
  
  var nav = useNavigate();

  const handlePostReg = async() => 
  {
      try 
      {
         var regRes = await axios.post("http://localhost:3500/v7/api/userprofiles/postUserProfile",
         {
            userFullName : userFullName ,
            userRole:userRole,
            userDescription:userDescription,
            userSkills:userSkills,
            userPortfolio:userPortfolio,
            userEducation:userEducation 
         }
         )
         console.log(regRes) ;
         if(regRes.data && regRes.data.success)
         {
             message.success(" Successfully created your profile ") ;
             nav("/TokenizedUser") ;
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
     <HeaderUser/>   
     <div className = "Profile">
      <h3 className = "registerHeading">
        Enter your personal details
      </h3>
       <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your full name"
      required="true"
      value={userFullName}
      onChange={e =>  setUserFullName(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your main role"
      required="true"
      value={userRole}
      onChange={e =>  setUserRole(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Describe about yourself"
      required="true"
      value={userDescription}
      onChange={e =>  setUserDescription(e.target.value)} 
    />
  </div>
  <br />
{/*  
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your top skills"
      required="true"
      value={userSkills}
      onChange={e =>  setUserSkills(e.target.value)} 
    />
  </div>

    */}
  <div className = "registerForm"> 
  <p className = "selectionPara">Select your skills</p>
  <MultiSelect options={options} value={userSkills} onChange={(selectedOptions) => setUserSkills(selectedOptions)} labelledBy='Skills' className="registerFormInputMultiselect" />
  <br />
  </div> 
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your website link - github/portfolio"
      required="true"
      value={userPortfolio}
      onChange={e =>  setUserPortfolio(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your highest qualification"
      required="true"
      value={userEducation}
      onChange={e =>  setUserEducation(e.target.value)} 
    />
  </div>
  <br />
  <button type="button" className="registerButton" onClick={handlePostReg}>
    Submit
  </button>
     </div> 
     </div> 
  )   
}

export default NewProfile ;