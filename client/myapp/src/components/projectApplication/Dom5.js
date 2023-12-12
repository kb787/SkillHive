import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import axios from 'axios' ;
const Dom5 = () => 
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
       <h3 className = "projHeading">
Ecommerce account manager
</h3>
       <br/>
       <p className = "projDes">
       Looking for an experienced Ecommerce account manager to help me increase sales on my Amazon, Flipkart, Meesho, and Myntra platforms. Ideal candidates should have a proven track record of increasing sales on these platforms and be able to provide past work samples demonstrating their success. The primary goal of this project is to increase sales, and the account manager should have experience optimizing listings to achieve this goal 
        <br/>
        Skills:- Sales Account Management, Digital Marketing
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
  <h3 className = "projHeading">I need a digital marketer, social media manager and Thumbail creator.
</h3>
       <br/>
       <p className = "projDes">
       I am an affiliate for online casino's, I have a website and all social media are set up but have no followers.

I need a digital marketer who can market our website and YouTube channel including all social media accounts on a international basis.

Manage all socials.

Keyword optimization
       <br/>
       Skills:-  Internet Marketing, Marketing, Digital Marketing, Social Media Marketing, SEO
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
  <h3 className = "projHeading">Agaricus " mushroom"</h3>
       <br/>
       <p className = "projDes">
       Frayer design for customer specific garment with the inspiration of mushroom.
Flyer page's include
<br/>
*client board
<br/>
*Mood board
<br/>
* Inspiration board
<br/>
* Photo shoo
<br/>
       <br/>
       Skills:- Digital Marketing, Graphic Design, Illustration, Adobe Photoshop, Flyer Design
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
  <h3 className = "projHeading">Create GHL (GoHighLevel) White Label SaaS</h3>
       <br/>
       <p className = "projDes">
       I'm a solopreneur and I am looking for collaborators (who preferably also speak Italian) for the creation, sale and customer assistance of the HighLevel software in White Label in the Italian market.

The goal is to customize the dashboard and make it inherent to the brand created, create a demo video of a maximum of 2 minutes to be included in the software sales landing page and create marketing sequences and launch email automation

two important characteristics that I look for in the collaborator is:

Knowing the Italian language and must have a minimum of experience with the GoHighLevel software

The goal is a long-term relationship
       <br/>
       Skills:-  Graphic Design, Website Design, Virtual Assistant, Digital Marketing, Web Development 
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
Need someone for marketing
</h3>
       <br/>
       <p className = "projDes">
       I'm looking for a freelancer to provide comprehensive marketing services for my business (start up visa in immigration), including search engine optimization (SEO), email marketing, and social media management, with a focus on Instagram. My budget for this project is more than $1000. I'm interested in hearing from experienced professionals with a proven track record of success in marketing, and the ability to help me get real results. We need someone that can generate leads for us as well. My deadline is end of July
       <br/>
       Skills:- Internet Marketing, SEO, Marketing, Lead Generation, Digital Marketing, Email Marketing, Facebook Marketing, Instagram Marketing, Leads, Marketing Strategy, Search Engine Marketing, Social Media Marketing, Twitter Marketing
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


export default Dom5 ; 