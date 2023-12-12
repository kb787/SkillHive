import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;

const Profile = () => 
{
    const [profId,setProfId] = useState('') ;
    const [profFirstName,setProfFirstName] = useState('') ;
    const [profLastName, setProfLastName] = useState('') ;
    const [profDescription,setProfDescription] = useState('') ;
    const [profAge,setProfAge] = useState('') ;
    const [profTechSkills,setProfTechSkills] = useState('') ;
    const [profQualification,setProfQualification] = useState('') ;
    const [profPortfolio,setProfPortfolio] = useState('') ;

    var nav = useNavigate() ;

    const handlePostResponse = async() => 
    {
      try {  
        var postResponse = await axios.post("http://localhost:3500/v2/api/profiles/postProfile",
          {
              profId:profId ,
              profFirstName:profFirstName ,
              profLastName:profLastName ,
              profDescription:profDescription ,
              profAge:profAge ,
              profTechSkills:profTechSkills ,
              profQualification:profQualification ,
              profPortfolio:profPortfolio
          }
        )  
        console.log(postResponse) ;
        if(postResponse.data && postResponse.data.success)
        {
            message.success(" Successfully saved your details ") ;
            nav("/Domain") ;
            message.success(" Your application had been sent succesfully ") ;
        }
      }
      catch(error)
      {
         console.log(error) ;
         message.error(" Server side error had occured ") ;
      }  
    }

    return (
    <div className = "Profile"> 
      <h3 className = "registerHeading">
        Enter your profile details
      </h3>
      <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your profile Id-gmailId"
      required="true"
      value={profId}
      onChange={e =>  setProfId(e.target.value)} 
    />
  </div>
  <br />
      <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your first name"
      required="true"
      value={profFirstName}
      onChange={e =>  setProfFirstName(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your last name"
      required="true"
      value={profLastName}
      onChange={e =>  setProfLastName(e.target.value)} 
      
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your profile description"
      required="true"
      value={profDescription}
      onChange={e =>  setProfDescription(e.target.value)} 
      
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="number"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your age"
      required="true"
      value={profAge}
      onChange={e =>  setProfAge(e.target.value)} 
      
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your technical skills"
      required="true"
      value={profTechSkills}
      onChange={e =>  setProfTechSkills(e.target.value)} 
      
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
      value={profQualification}
      onChange={e =>  setProfQualification(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your github link,blog"
      required="true"
      value={profPortfolio}
      onChange={e =>  setProfPortfolio(e.target.value)} 
      
    />
  </div>
  <br />
  <button type="button" className="registerButton" onClick={handlePostResponse}>
    Save
  </button>  
    </div>    
    )
}

export default Profile ;