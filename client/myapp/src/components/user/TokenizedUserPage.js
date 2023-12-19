import HeaderTokenized from "./HeaderTokenized";
import FreelancerprojectCard from "D:/FreelancingWebsite/client/myapp/src/components/projectApplication/FreelancingprojectCard" ;
const TokenizedUser = () => {
   return (
      <div className = "HomePageUserContainer">
           <HeaderTokenized/>
           <ul className = "homepageUserComponents">
                <li className = "homepageUserComponent">
                    <FreelancerprojectCard/>   
                </li>
           </ul>
      </div>
   )  
}

export default TokenizedUser ;