import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import axios from 'axios' ;
const Dom6 = () => 
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
       <h3 className = "projHeading">Testicle cooling device
</h3>
       <br/>
       <p className = "projDes">
       The company that was creating the above product abandoned the project. It needs to be able to be worn most of the day before needing to be charged, or replace batteries etc. it needs to be able to deal with excess heat coming from testicles due to medical condition, and to consistently reduce testicle temperature about 5 degrees farenheight.

I have bi-lateral varicoceles with 3 failed surgeries. Surgical repair is no longer an option. Because of my varicoceles, I have bad sperm quality due to the varicoceles overheating my testicles and more. This product is mainly for personal use, however I would consider making more and starting a company with it down the road. But mostly it’s for myself so I can improve fertility and testererone levels.

I would hypothetically wear this most of the day, even during sleep so it needs to be durable.
        <br/>
        Skills:-  Electrical Engineering, Electronics, Engineering, Matlab and Mathematica, Mechanical Engineering
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
  <h3 className = "projHeading">PLC expert for urgent Task
</h3>
       <br/>
       <p className = "projDes">
       PLC expert for urgent Task

New Freelancer
       <br/>
       Skills:-  Electrical Engineering, Electronics, Microcontroller, PLC, PLC & SCAD
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
I need an electrical engineer to reposition a wire</h3>
       <br/>
       <p className = "projDes">
       A newly bought tea packing machine has an electrical defect caused by incorrect wiring to a controller. We need to install a new controller while correcting the wiring. 2 live wires were connected to the controller instead of one so the old controller is broken now. So one of 2 live wires should be connected to the neutral
       <br/>
       Skills:-  Electrical Engineering, Electric Repair
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
  <h3 className = "projHeading">Consultant for Solar micro inverter design</h3>
       <br/>
       <p className = "projDes">
       I need a consultant for a Solar micro inverter design with maximum power 750W , 1500W and 2000W ( multiple inputs with 250W per input). Detailed spec will be explained during discussion. Our company has electronics engineers so we need a consultant with solid experience in designing solar micro inverter. Please do not bid if you haven't done a successful micro inverter. Also I do not respond to generic bid messages. Please be specific with your Solar micro inverter experience. Start your bid message with "SOLMICINV" to make sure that you have read it fully 
       <br/>
       Skills:-  Electrical Engineering, Electronics, Circuit Design, Power Generation, PCB Design and Layout 
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
  Jacobi Iterative Method for Linear Systems
</h3>
       <br/>
       <p className = "projDes">
       This will be a Numerical Analysis paper. And below you can find the structure of the project. In this paper you will explain Jacobi Iterative Method for Linear Systems as follows. Deadline will be 09.06.2023 8:00 P.M (GMT+3). So it is an urgent one.
       <br/>
       Skills:- Matlab and Mathematica, Mathematics, Research Writing, Electrical Engineering, MATLAB
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


export default Dom6 ; 