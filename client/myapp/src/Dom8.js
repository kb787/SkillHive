import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import axios from 'axios' ;
const Dom8 = () => 
{
  const [projectId,setProjectId] = useState('') ;
   const [projectAmount,setProjectAmount] = useState('') ;
   const [projectDays,setProjectDays] = useState('') ;
   const [projectDescription,setProjectDescription] = useState('') ;

   var navigate = useNavigate() ;

   const handleApplyProject = async() =>
   {
      try {
           var applyResponse = await axios.post("http://localhost:3500/v5/api/projects/applyProject",
           {
               projectId:projectId ,
               projectAmount:projectAmount ,
               projectDays:projectDays ,
               projectDescription:projectDescription
           }
           ) ;
           console.log(applyResponse) ; 
           if(applyResponse.data && applyResponse.data.success)
           {
            //  message.send(" Successfully sent your application ") ;
              navigate("/") ;
           }
           else {
            message.error(" Already applied ") ;
           }
      }
      catch(error)
      {
          console.log(error) ;
          message.error(" Server side error had occured ") ;
      }
   }
   return ( 
    <div className = "Dom1">
       <h3 className = "projHeading">
       Truck driver /caregiver personal assistant
</h3>
       <br/>
       <p className = "projDes">
       We are seeking a compassionate and reliable caregiver to provide care and support to our elderly or disabled clients. The caregiver will be responsible for assisting with daily living activities, medication management, and providing emotional support to clients and their families. The ideal candidate will have experience working with the elderly or disabled, excellent communication skills, and a positive attitude.

Key Responsibilities:
<br/>
- Assist clients with daily living activities such as bathing, dressing, grooming, and toileting
<br/>
- Administer medication as prescribed by a physician
<br/>
- Monitor and record vital signs, such as blood pressure and temperature
<br/>
- Prepare meals and assist with feeding
<br/>
- Provide emotional support and companionship to clients
<br/>
- Accompany clients to medical appointments and other outings
<br/>
- Perform light housekeeping duties such as laundry and cleaning
<br/>
- Maintain accurate records of client care and progress
<br/>
- Communicate with clients' families and healthcare professionals as needed
<br/>
Qualifications:
<br/>
- High school diploma or equivalent
<br/>
- Certified Nursing Assistant (CNA) or Home Health Aide (HHA) certification preferred
<br/>
- Minimum of 1 year of experience working with the elderly or disabled
<br/>
- Excellent communication and interpersonal skills
<br/>
- Ability to work independently and as part of a team
<br/>
- Reliable transportation and a valid driver's license
<br/>
- Ability to pass a criminal background check and drug screening
        <br/>
        Skills:- General Labor, Car Driving, Local Job
       </p>
       <ul className = "formCollection">
       <li className = "formList">
           <div className="domForm">
    <input
      type="text"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email Id"
      value={projectId}
      onChange={e => setProjectId(e.target.value)}
      required="true"
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your bid amount"
      value={projectAmount}
      onChange={e => setProjectAmount(e.target.value)}
      required="true"
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter no of days required"
      value={projectDays}
      onChange={e => setProjectDays(e.target.value)}
      required="true"
    />
  </div>
           </li>
       </ul>
    <br/>
    <div className="domArea">
    <textarea
      className="domFormInputArea"
      defaultValue={""}
      placeholder="Describe as a cover letter about project and how you will implement it"
      value={projectDescription}
      onChange={e => setProjectDescription(e.target.value)}
      required="true"
    />
  </div> 
  <br/>
  <br/>
  <div > 
  <button type="button" className="formButton" onClick={handleApplyProject}>
    Place Bid
  </button>
  </div>
  <br/>
  <br/>
  <h3 className = "projHeading">
Personal Assistant virtual assistant errand, Truckdriver /caregiver
</h3>
       <br/>
       <p className = "projDes">We are seeking a compassionate and reliable caregiver to provide care and support to our elderly or disabled clients. The caregiver will be responsible for assisting with daily living activities, medication management, and providing emotional support to clients and their families. The ideal candidate will have experience working with the elderly or disabled, excellent communication skills, and a positive attitude.
       <br/>
Key Responsibilities:
<br/>
- Assist clients with daily living activities such as bathing, dressing, grooming, and toileting
<br/>
- Administer medication as prescribed by a physician
<br/>
- Monitor and record vital signs, such as blood pressure and temperature
<br/>
- Prepare meals and assist with feeding
<br/>
- Provide emotional support and companionship to clients
<br/>
- Accompany clients to medical appointments and other outings
<br/>
- Perform light housekeeping duties such as laundry and cleaning
<br/>
- Maintain accurate records of client care and progress
<br/>
- Communicate with clients' families and healthcare professionals as needed
       <br/>
       Skills:-  Virtual Assistant, Web Search, Data Processing, Car Driving, General Labor
       </p>
       <br/>
       <ul className = "formCollection">
       <li className = "formList">
           <div className="domForm">
    <input
      type="text"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email Id"
      value={projectId}
      onChange={e => setProjectId(e.target.value)}
      required="true"
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your bid amount"
      value={projectAmount}
      onChange={e => setProjectAmount(e.target.value)}
      required="true"
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter no of days required"
      value={projectDays}
      onChange={e => setProjectDays(e.target.value)}
      required="true"
    />
  </div>
           </li>
       </ul>
    <br/>
    <div className="domArea">
    <textarea
      className="domFormInputArea"
      defaultValue={""}
      placeholder="Describe as a cover letter about project and how you will implement it"
      value={projectDescription}
      onChange={e => setProjectDescription(e.target.value)}
      required="true"
    />
  </div> 
  <br/>
  <br/>
  <div > 
  <button type="button" className="formButton" onClick={handleApplyProject}>
    Place Bid
  </button>
  </div>
  <br/>
  <br/>
  <h3 className = "projHeading">
Ironing Lake Macquarie
 </h3>
       <br/>
       <p className = "projDes">
       Hi, we are a family of four (two adults and two little girls) and we need someone to do a load of ironing each week. Our preference would be for someone to pick up and deliver, but could drop them if necessary
       <br/>
       Skills:-  Laundry and Ironing, Car Driving
       </p>
       <br/>
       <ul className = "formCollection">
       <li className = "formList">
           <div className="domForm">
    <input
      type="text"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email Id"
      value={projectId}
      onChange={e => setProjectId(e.target.value)}
      required="true"
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your bid amount"
      required="true"
      value={projectAmount}
      onChange={e => setProjectAmount(e.target.value)}
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter no of days required"
      required="true"
      value={projectDays}
      onChange={e => setProjectDays(e.target.value)}
    />
  </div>
           </li>
       </ul>
    <br/>
    <div className="domArea">
    <textarea
      className="domFormInputArea"
      defaultValue={""}
      placeholder="Describe as a cover letter about project and how you will implement it"
      required="true"
      value={projectDescription}
      onChange={e => setProjectDescription(e.target.value)}
    />
  </div> 
  <br/>
  <br/>
  <div > 
  <button type="button" className="formButton" onClick={handleApplyProject}>
    Place Bid
  </button>
  </div>
  <br/>
  <br/>
  <h3 className = "projHeading">Petrol Station Night Photos -- 2</h3>
       <br/>
       <p className = "projDes">
       I need 1 person to take photos of petrol stations at night.

Once done, you will need to upload those photos in a telegram group along with the location of the petrol station
       <br/>
       Skills:-  Car Driving, Photography, Motorbike, Adobe Lightroom, Adobe Photoshop, Android, General Labor, iPhone, Local Job, Photo Editing, Photoshop, Photoshop Coding, Product Photography, Samsung, Travel Ready
       </p>
       <br/>
       <ul className = "formCollection">
       <li className = "formList">
           <div className="domForm">
    <input
      type="text"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email Id"
      value={projectId}
      onChange={e => setProjectId(e.target.value)}
      required="true"
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your bid amount"
      required="true"
      value={projectAmount}
      onChange={e => setProjectAmount(e.target.value)}
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter no of days required"
      required="true"
      value={projectDays}
      onChange={e => setProjectDays(e.target.value)}
    />
  </div>
           </li>
       </ul>
    <br/>
    <div className="domArea">
    <textarea
      className="domFormInputArea"
      defaultValue={""}
      placeholder="Describe as a cover letter about project and how you will implement it"
      required="true"
      value={projectDescription}
      onChange={e => setProjectDescription(e.target.value)}
    />
  </div> 
  <br/>
  <br/>
  <div > 
  <button type="button" className="formButton" onClick={handleApplyProject}>
    Place Bid
  </button>
  </div>
  <br/>
  <br/>
  <h3 className = "projHeading">
Petrol Station Night Photoss
</h3>
       <br/>
       <p className = "projDes">
       I need 1 person to take photos of petrol stations at night.

Once done, you will need to upload those photos in a telegram group along with the location of the petrol station.
       <br/>
       Skills:- Photography, Car Driving, Adobe Lightroom, Adobe Photoshop, Android, General Labor, iPhone, Local Job, Photo Editing, Photoshop, Photoshop Coding, Product Photography, Samsung, Travel Ready
       <br/>
       </p>
       <ul className = "formCollection">
       <li className = "formList">
           <div className="domForm">
    <input
      type="text"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your email Id"
      value={projectId}
      onChange={e => setProjectId(e.target.value)}
      required="true"
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your bid amount"
      required="true"
      value={projectAmount}
      onChange={e => setProjectAmount(e.target.value)}
    />
  </div>
           </li>
           <li className = "formList">
           <div className="domForm">
    <input
      type="number"
      className="domFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter no of days required"
      required="true"
      value={projectDays}
      onChange={e => setProjectDays(e.target.value)}
    />
  </div>
           </li>
       </ul>
    <br/>
    <div className="domArea">
    <textarea
      className="domFormInputArea"
      defaultValue={""}
      placeholder="Describe as a cover letter about project and how you will implement it"
      value={projectDescription}
      onChange={e => setProjectDescription(e.target.value)}
      required="true"
    />
  </div> 
  <br/>
  <br/>
  <div > 
  <button type="button" className="formButton" onClick={handleApplyProject}>
    Place Bid
  </button>
  </div>
    </div>
   )
}   


export default Dom8 ; 