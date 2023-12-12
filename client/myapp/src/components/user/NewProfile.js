import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import HeaderUser from 'D:/FreelancingWebsite/client/myapp/src/components/user/HeaderUser';
const NewProfile = () => 
{
  const [userName,setUserName] = useState('') ;
  const [userRole,setUserRole] = useState('') ;
  const [userDescription,setUserDescription] = useState('') ;
  const [userSkills,setUserSkills] = useState('') ;
  const [userPortfolio,setUserPortfolio] = useState('') ;
  const [userEducation,setUserEducation] = useState('') ;
  const [filename,setFileName] = useState('') ;
  let formData ;


   var nav = useNavigate() ;

   const handleChange = (event) => {
    const selectedSkills = Array.from(event.target.options)
      .filter(option => option.selected)
      .map(option => option.value);
    setUserSkills(selectedSkills);
  };

   const handlePostNewProfile = async() => 
   {
        try {
              var postResponse = await axios.post("http://localhost:3500/v7/api/userprofiles/postUserProfile",
               {
                   userName : userName ,
                   userRole:userRole ,
                   userDescription:userDescription ,
                   userSkills:userSkills,
                   userPortfolio:userPortfolio ,
                   userEducation:userEducation ,      
               } 
              )
              console.log(postResponse) ;
              if(postResponse.data.success) {
              message.success("Successfully sent your application") ;
              nav("/HomepageUser") ;
              }
              else {
                 message.error('Unable to sent application')
              }
        }
        catch(error)
        {
            console.log(error) ;
            message.error("Server side error had occured")  ; 
        }
   }
   return  (
   <div className = "mainPageContainer"> 
   <HeaderUser/>  
   <div className = "Register">
        <h3 className = "registerHeading">
        Enter your personal details 
      </h3>
      <div className="registerForm">
    <input
      type={'text'}
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
      type={'text'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your role. Ex:Graphic Designer "
      required={true}
      value={userRole}
      onChange={e =>  setUserRole(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type={'text'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Give an introduction about yourself"
      required={true}
      value={userDescription}
      onChange={(e) =>  setUserDescription(e.target.value)}  
    />
  </div>
  <br />
  <label className = "registerFormInputLabel">Select your skills</label>
  <div className="registerForm">
    <select multiple = {true} value={userSkills} onChange={handleChange} className = "registerFormInput">
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="android">Android Development</option>
          <option value="nodejs">NodeJs</option>
          <option value="reactjs">ReactJs</option>
          <option value="html/css">HTML/CSS</option>
          <option value="mongodb">MongoDB</option>
          <option value="django">Django</option>
          <option value="vuejs">VueJs</option>
          <option value="angularjs">AngularJs</option>
          <option value="c#">C#</option>
          <option value="figma">Figma</option>
          <option value="tailwindcss">TailwindCSS</option>
          <option value="bootstrap">Bootstrap</option>
          <option value="kotlin">Kotlin</option>
    </select> 
  </div>
  <br/>
  <div className="registerForm">
    <input
      type={'text'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      required="true"
      placeholder="Enter your Portfolio/Website Link/Github"
      value = {userPortfolio} 
      onChange={e => setUserPortfolio(e.target.value)} 
    />
  </div>
  <br/>
  <div className="registerForm">
    <input
      type={'text'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your highest qualification"
      required={true}
      value={userEducation}
      onChange={e =>  setUserEducation(e.target.value)} 
    />
  </div>
  <br/>
  <button type="button" className="registerButton" onClick={handlePostNewProfile}>
    Post
  </button>
   </div> 
   </div>
   )
}

export default NewProfile ;