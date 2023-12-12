import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import axios from 'axios' ;

const Dom3 = () => 
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
             // message.send(" Successfully sent your application ") ;
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
       <h3 className = "projHeading">Video editor required</h3>
       <br/>
       <p className = "projDes">
       I am looking for a skilled video editor to help with my Youtube channel. Specifically, I am in need of someone who has experience editing entertainment videos, with a focus on videos that are between 10-20 minutes in length. I am looking for someone who can provide a quick turnaround time and can deliver the edited videos within 3 days.

Ideal skills and experience for this job include:

- Proficiency in video editing software such as Adobe Premiere Pro or Final Cut Pro

- Strong communication skills to ensure the final product meets my expectations.

If you are a creative and detail-oriented video editor who can work efficiently under tight deadlines, I would love to hear from you!
        <br/>
        Skills:- Video Editing, Video Production, Video Services, Videography, Adobe Premiere Pro
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
  Mobile App Preview Video Needed
</h3>
       <br/>
       <p className = "projDes">
       I am looking for a skilled, creative freelancer to create a mobile app preview video for my social video app. The video must be no longer than 30 seconds in length, may a mixed-media style, must be fun a, engaging and communicate the features and playful "spirit" of the app.
       <br/>
       Skills:-Video Editing, Video Services, Video Production, Videography, After Effects
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
  <h3 className = "projHeading">Premiere Pro Video Editor -- 2</h3>
       <br/>
       <p className = "projDes">
       Hi everyone, I am Rishabh Dev Pushker, 17 years old from India. A Premiere Pro Video Editor at Intermediate level and a Subtitle/Caption Editor for YouTube Videos. Currently i am pursuing my Engineering course in 2nd Year. Having great ideas of Video Editting whether it's Marvel or Gaming, i can edit your videos at lower cost, higher Quality, infinite clips & quick response. You can contact me on : Mobile No. : +91 737 6733 277
       <br/>
       Skills:-  Video Editing, Video Services, Video Production, YouTube Video Editing, Adobe Premiere Pro
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
  <h3 className = "projHeading">Animated videos / whiteboard explainers</h3>
       <br/>
       <p className = "projDes">
       I am looking for a freelancer to create multiple 3-5 minute animated videos and whiteboard explainers for educational and instructional purposes. The ideal candidate should have experience in creating engaging and informative videos.

Melbourne / Australia based or time zone preferred.
<br/>
Requirements:
<br/>
- Ability to work with pre-existing scripts
<br/>
- Proficiency in animation software such as Adobe After Effects and Illustrator
<br/>
- Attention to detail and ability to meet deadlines
       <br/>
       Skills:- Animation, After Effects, 3D Animation, Illustration, Video Editing
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
  <h3 className = "projHeading">Need a small intro video for an Organic Stevia based product company
</h3>
       <br/>
       <p className = "projDes">
       I'm looking for professional help to create a 30 second intro video for an organic stevia-based product company. The perfect freelancer should be able to offer past work to demonstrate their experience and expertise, and should be comfortable creating a video with a professional and polished feel. If you think this project sounds like a good fit for your skills, I'd love to hear from you about your detailed project proposal. Thanks for your consideration - I look forward to working with you
       <br/>
       Skills:-   Video Services, Animation, Video Editing
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


export default Dom3 ; 