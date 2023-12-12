import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import HeaderUser from 'D:/FreelancingWebsite/client/myapp/src/components/user/HeaderUser';
const ProjectBidding = () => 
{
  const [projectId,setProjectId] = useState('') ;
  const [projectAmount,setProjectAmount] = useState('') ;
  const [projectDays,setProjectDays] = useState('') ;
  const [projectDescription,setProjectDescription] = useState('') ;

   var nav = useNavigate() ;

   const handlePostNewProject = async() => 
   {
        try {
              var postResponse = await axios.post("http://localhost:3500/v5/api/projects/applyProject",
               {
                  projectId:projectId ,
                  projectAmount:projectAmount ,
                  projectDays:projectDays ,
                  projectDescription:projectDescription
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
      type={'email'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email address"
      required={true}
      value={projectId}
      onChange={e =>  setProjectId(e.target.value)} 
    />
  </div>
  <br />
      <div className="registerForm">
    <input
      type={'number'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your bidding amount"
      required={true}
      value={projectAmount}
      onChange={e =>  setProjectAmount(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type={'number'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter number of days required"
      required={true}
      value={projectDays}
      onChange={e =>  setProjectDays(e.target.value)}  
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type={'text'}
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Describe how you will implement the project"
      required="true"
      value={projectDescription}
      onChange={e =>  setProjectDescription(e.target.value)} 
    />
  </div>
  <br/>
  <button type="button" className="registerButton" onClick={handlePostNewProject}>
    Post
  </button>
   </div> 
   </div>
   )
}

export default ProjectBidding ;