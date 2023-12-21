import RecommendationCard from "./RecommendationCard" 
import HeaderUser from "../user/HeaderUser"

const RecommendationContainer = () => {
   return ( 
      <div className = "HomePageUserContainer">
         <HeaderUser />
         <ul className = "homepageUserComponents">
            <li className = "homepageUserComponent">
                 <RecommendationCard />
            </li>
         </ul>
      </div>
   )  
}

export default RecommendationContainer ;