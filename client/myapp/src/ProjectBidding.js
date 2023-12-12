import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate,useLocation} from 'react-router-dom' ;
import {message} from 'antd' ;
import HeaderUser from './HeaderUser';
const ProjectBidding = () => 
{
    const [projectId,setProjectId] = useState('') ;
    const [projectAmount,setProjectAmount] = useState('') ;
    const [projectDays,setProjectDays] = useState('') ;
    const [projectDescription,setProjectDescription] = useState('') ;
    
    let location = useLocation() ;
    let maxAmount,maxDays ;
    maxAmount = location.state.maxAmount ;
    maxDays = location.state.maxDays ;
   var nav = useNavigate() ;

   const handleValidation = () => {
    
   }

   const handlePostNewProject = async() => 
   {
        try {
            if(projectAmount === 0 || projectAmount > maxAmount || projectDays === 0 || projectDays > maxDays) 
            {
                 alert("Project Amount cannot be 0 or greater than max. Project days cannot be zero or greater than max days") ;
            } 
              var postResponse = await axios.post("http://localhost:3500/v5/api/projects/applyProject",
               {
                   projectId:projectId ,
                   projectAmount:projectAmount ,
                   projectDays:projectDays,
                   projectDescription:projectDescription
               } 
              )
              console.log(postResponse) ;

              message.success("Successfully applied to the project") ;
              nav("/HomepageUser") ;
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
        Enter your personal information 
      </h3>
      <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email address"
      required="true"
      value={projectId}
      onChange={e =>  setProjectId(e.target.value)} 
    />
  </div>
  <br />
      <div className="registerForm">
    <input
      type="number"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your bid amount should be less than or equal to provided amount"
      required="true"
      value={projectAmount}
      onChange={e =>  setProjectAmount(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="number"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter number of days"
      required="true"
      value={projectDays}
      onChange={e =>  setProjectDays(e.target.value)}  
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Describe how you will do the project"
      required="true"
      value={projectDescription}
      onChange={e =>  setProjectDescription(e.target.value)} 
    />
  </div>
  <br />
  <button type="button" className="registerButton" onClick={handlePostNewProject}>
    Post
  </button>
   </div> 
   </div>
   )
}

export default ProjectBidding ;