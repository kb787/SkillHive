import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import axios from 'axios' ;
const Dom1 = () => 
{
   const [projectId,setProjectId] = useState('') ;
   const [projectAmount,setProjectAmount] = useState('') ;
   const [projectDays,setProjectDays] = useState('') ;
   const [projectDescription,setProjectDescription] = useState('') ;

   var nav = useNavigate() ;

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
               nav("/") ;
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
       <h3 className = "projHeading">Need help in Blockchain website errors</h3>
       <br/>
       <p className = "projDes">
       Ideal Skills and Experience:
       <br/>
      - Proficient in PHP, Reactjs, Flutter, Python, Game developement and custom programming language code.
       <br/>
      - Experience in handling and resolving CORS errors in Rest API
       <br/>  
      - Familiarity with server configurations and settings related to CORS requests.
        <br/>
Please interested developers can apply, It need to complete this project within some hour's 
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
  <h3 className = "projHeading">AR App for Sporting Events -- 2</h3>
       <br/>
       <p className = "projDes">
       An app for apples new augmented reality/VR glasses that recognizes players at sporting events through player number/facial recognition that brings up their stats, player information, allows you to bet on each player/the game after teaming up with a betting company. Another big feature would be to watch missed moments or close calls through replays in the glasses. Maybe can have certain things pop up on the screen per stadium based on where you are, such as tigers at a Detroit Tigers game. Monthly subscription is the idea. Trying to see if it’s possible to get what I think is a great idea at an early stage of AR off the ground.
       <br/>
       Skills:- iPhone, Mobile App Development, Android, Unity 3D, Game Development
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
  <h3 className = "projHeading">Power Ball</h3>
       <br/>
       <p className = "projDes">
       The idea is to create a lobby area powered by a backend which will hold all the games to be played by the user. Create games such as keno, hexa keno, different themes and versions of slot games and other miscellaneous games such as fishing games. In total, 12 games at first with a lobby interface and admin interface through which various affiliate levels of users can be created. virtual coins can be created and added to the top user all the way to the bottom players subsequently. The games and the gaming interface needs to be very intuitive, clean and animated(source code for android, ios and web interface to be created, configured and handed over on completion of the project(source code is proprietary and an NDA needs to be signed by the developer(s) to not share with any other client in the likeness, form and nature of it as created for us. Attached herewith are the screenshots of a similar front end and gaming interface from which inspiration can be derived.
       <br/>
       Skills:- Game Development, HTML5, iPhone, Mobile App Development, PHP
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
  <h3 className = "projHeading">Mobile Game Developer</h3>
       <br/>
       <p className = "projDes">
       Hello all, am interested in getting the service of a professional mobile game developer that can build a multi player board games like Ludo, Chess and Scrabble. Send me a DM if you can work on this.
       <br/>
       Skills:- iPhone, Mobile App Development, Game Development, Game Design, Android
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
  <h3 className = "projHeading">Airplane Simulator IOS App</h3>
       <br/>
       <p className = "projDes">
       Airplane Simulator IOS App for Casual Gamers
       <br/>
- Looking for a commercial airliner simulator
       <br/>
- Require realistic flight physics
<br/>
- Targeting casual gamers
<br/>
Ideal Skills and Experience:
<br/>
- Experience developing IOS apps
<br/>
- Proficient in game design and development
<br/>
- Knowledge of flight physics and simulation software
<br/>
- Familiarity with commercial airliner cockpit design
<br/>
- Ability to incorporate airport navigation and ATC features is a plus
       <br/>
       Skills:- iPhone, Mobile App Development, Game Development, Game Design, Android
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


export default Dom1 ; 