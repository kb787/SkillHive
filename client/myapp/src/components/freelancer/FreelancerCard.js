import {useState,useEffect} from 'react' ;
import {message} from 'antd' ;
import {useNavigate} from 'react-router-dom' ;


const FreelancerCard = () => {
 const [freelancerData,setFreelancerData] = useState([]) ;
 var nav = useNavigate() ;
  const handleHiring = (e) => 
  {
    e.preventDefault() ;
    nav("/Post") ;
  }

    useEffect(() => {
        const  fetchFreelanceData = async () => {
        try {
             let fetchResponse = await fetch('http://localhost:3500/v6/api/freelancersdatas/fetchfreelancerdata') ;
             if(!fetchResponse) {
                 message.error(' Unable to fetch the data ') ;
             }
             else {
                let jsonData = await fetchResponse.json() ;
                console.log(jsonData) ;
                setFreelancerData(jsonData) ;
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
              freelancerData?.map((freelancer) => (
                <li className = "freelancerSet">
                  <div className = "FreelancerCard" key = {freelancer._id}>
                      <div className = "FreelancerDataContent">
                           <p className = "freelancerDataContent">
                              Name :-  {freelancer.name}
                           </p>     
                           <p className = "freelancerDataContent">
                              SkillSets :-   {freelancer.skills}
                           </p> 
                           <p className = "freelancerDataContent">
                             Country :-    {freelancer.location}
                           </p> 
                           <p className = "freelancerDataContent">
                              About
                           </p>
                           <p className = "freelancerDataContent">
                               {freelancer.description}
                           </p> 
                           <br/>
                           <p className = "freelancerDataContent">
                             Ratings :- {freelancer.rating}
                           </p> 
                           <button className = "hiringButton" onClick={handleHiring}>
                           Hire  
                          </button> 
                      </div>
                  </div> 
                  </li>
              ))
          }   
        </>   
    )
}

export default FreelancerCard ;