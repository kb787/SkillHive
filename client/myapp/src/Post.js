import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import HeaderUser from './HeaderUser';
const Post = () => 
{
   const [postId,setPostId] = useState('') ;
   const [postName,setPostName] = useState('') ;
   const [postDescription,setPostDescription] = useState('') ;
   const [postDays,setPostDays] = useState('') ; 
   const [postAmount,setPostAmount] = useState('') ;

   var nav = useNavigate() ;

   const handlePostNewProject = async() => 
   {
        try {
              var postResponse = await axios.post("http://localhost:3500/v3/api/posts/postProject",
               {
                    postId:postId ,
                    postName:postName ,
                    postDescription:postDescription ,
                    postDays:postDays ,
                    postAmount:postAmount 
               } 
              )
              console.log(postResponse) ;
              message.success("Successfully saved your post and send to freelancer") ;
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
        Enter the project details 
      </h3>
      <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your post Id-gmailId"
      required="true"
      value={postId}
      onChange={e =>  setPostId(e.target.value)} 
    />
  </div>
  <br />
      <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your project name"
      required="true"
      value={postName}
      onChange={e =>  setPostName(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your post description"
      required="true"
      value={postDescription}
      onChange={e =>  setPostDescription(e.target.value)}  
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="number"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter the number of days required"
      required="true"
      value={postDays}
      onChange={e =>  setPostDays(e.target.value)} 
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="number"
      className="registerFormInput"
      id="exampleFormControlInput1"
      placeholder="Enter your post amount"
      required="true"
      value={postAmount}
      onChange={e =>  setPostAmount(e.target.value)}  
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

export default Post ;