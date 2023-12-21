import {useState,useEffect} from 'react' ;
import {message} from 'react' ;

const RecommendationCard = () => {
     const [cardData,setCardData] = useState([]) ;
     useEffect(() => {
        const handleDataFetch = async() => {
             try {
                 let fetchResponse = await fetch("http://localhost:3000/v12/api/postDataReact") ;
                 if(fetchResponse) {
                     let jsonDataFetch = await fetchResponse.json() ;
                     setCardData(jsonDataFetch) ;
                 }
                 else {
                     message.error('Unable to get data') ;
                 }  
             }
             catch(error){
                 console.log(error) ;
                 message.error('Server side error occured') ;
             } 
        }
        handleDataFetch()
     }
     ,[])
     return (
        <div className = "RecommendationCard">
        {
              cardData?.map((project) => 
              (
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
                              Duration :- {project.projectDuration} 
                         </p>
                         <p className = "freelancerDataContent">
                             {project.projectDescription} 
                         </p>
                         </div> 
                     </div>
                 </li>
              )
              
              )
        }      
        </div>
     )  
}

export default RecommendationCard ;