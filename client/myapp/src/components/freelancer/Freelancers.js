import FreelancerCard from "./FreelancerCard";
import {useState,useEffect} from 'react' ;
import {message} from 'antd' ;
const Freelancers = () => {

  const [openSkill,setOpenSkill] = useState(false) ;
  const [openLocation,setOpenLocation] = useState(false) ;
  const [openRatings,setOpenRatings] = useState(false) ;
  const [searchTextSkill,setSearchTextSkill] = useState('') ;
  const [searchTextLocation,setSearchTextLocation] = useState('') ;
  const [searchTextRating,setSearchTextRating] = useState('') ;
  const [data,setData] = useState([]) ;
  const [filteredData,setFilteredData] = useState([]) ;

  const handleTextClickSkill = () => {
    setOpenSkill(!openSkill)  
}

const handleTextClickLocation = () => {
  setOpenLocation(!openLocation)  
}

useEffect(() => {
   const fetchFreelancerData = async() => {
         try {
            let fetchResponse,jsonData ;
            fetchResponse = await fetch('http://localhost:3500/v6/api/freelancersdatas/fetchfreelancerdata') ;
            if(!fetchResponse) {
                message.error('Unable to fetch data') ;
            }
            else {
               jsonData = await fetchResponse.json() ;
               console.log(jsonData) ;
               setData(jsonData) ;
            }  
         }
         catch(error){
             console.log(error) ;
             message.error('Server side error occured') ;
         }
   }
   fetchFreelancerData() 
},
[]  )

useEffect(() => {
   const results = data.filter((item) =>
      item.skills?.toLowerCase().includes(searchTextSkill.toLowerCase()) &&
      item.location?.toLowerCase().includes(searchTextLocation.toLowerCase()) &&
      item.rating?.toLowerCase().includes(searchTextLocation.toLowerCase())
   ) ;
   setFilteredData(results) ;
}
, [searchTextSkill,searchTextLocation,searchTextRating]
)

const handleTextClickRatings = () => {
setOpenRatings(!openRatings)  
}
    return (
         <div className = "Freelancers">
              <div className = "sidebarFreelancer">
      <ul className = "sidebarCollectionFreelancer">
           <li className = "sidebarList" onClick={handleTextClickSkill}>Browse by skills
           <br/>
           {openSkill && (
        <input
          type="text"
          value={searchTextSkill}
          onChange={(e) => setSearchTextSkill(e.target.value)}
          placeholder="Enter required skills"
          onClick = {(e) => e.stopPropagation()}
          className = "freelancerInput"
        />
        )}         
          </li>
           <br/>
           <li className = "sidebarList" onClick = {handleTextClickLocation}>Browse by location
           <br/>
           {
              openLocation && (
                 <input type="text" value = {searchTextLocation} 
                 onChange = {(e) => setSearchTextLocation(e.target.value)}
                 placeholder = "Enter your Location"
                 onClick = {(e) => e.stopPropagation()}
                 className = "freelancerInput"
                 /> 
              )
           }
           </li> 
           <br/>
           <li className = "sidebarList" onClick={handleTextClickRatings}>Browse by ratings
           <br/>
           {
              openRatings && (
                 <input type="text" value = {searchTextRating} 
                 onChange = {(e) => setSearchTextRating(e.target.value)}
                 placeholder = "Enter expected ratings"
                 onClick = {(e) => e.stopPropagation()}
                 className = "freelancerInput"
                 /> 
              )
           }
           </li> 
           <br/>
      </ul>  
      </div> 
         {filteredData.map(item => (    
            <li className = "freelancerComponent">
            <FreelancerCard item = {item}/>
            </li> 
          ) )      
         }   
         </div>
    )
}

export default Freelancers ;