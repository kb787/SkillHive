import {useState,useEffect} from 'react' ;
import {message} from 'antd' ;
import {useNavigate} from 'react-router-dom' ;
import ApplyButton from './ApplyButton';


const FreelancerprojectCard = () => {
 const [data,setData] = useState([]) ;
 var nav = useNavigate() ;

    useEffect(() => {
        const  fetchFreelanceData = async () => {
        try {
             let fetchResponse = await fetch('http://localhost:3500/v8/api/freelancerprojects/getProject') ;
             if(!fetchResponse) {
                 message.error(' Unable to fetch the data ') ;
             }
             else {
                let jsonData = await fetchResponse.json() ;
                console.log(jsonData) ;
                setData(jsonData) ;
             }  
        } 
        catch(error){
              console.log(error) ;
              message.error(' Server side error occured ')
        }
        }
        fetchFreelanceData()
    }
    ,[]  )
    return (
        <>
          {
              data?.map((project) => (
                <li className = "projectSet">
                  <div className = "FreelancerCard" key = {project._id}>
                      <div className = "FreelancerDataContent">
                           <p className = "freelancerDataContent">
                                 {project.projectTitle}
                           </p>     
                           <p className = "freelancerDataContent">
                                Amount :- {project.projectAmount}
                           </p> 
                           <p className = "freelancerDataContent">
                                Duration :-  {project.projectDays }
                           </p> 
                           <p className = "freelancerDataContent">
                               {project.projectDescription}
                           </p> 
                           <br/>
                           <ApplyButton project={project} />
                      </div>
                  </div> 
                  </li>
              ))
          }   
        </>   
    )
}

export default FreelancerprojectCard ;