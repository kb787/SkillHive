import HeaderUser from "./HeaderUser" ;
import FreelancerprojectCard from "./FreelancingprojectCard";
const HomepageUser = () => {
   return (
      <div className = "HomePageUserContainer">
           <HeaderUser/>
           <ul className = "homepageUserComponents">
                <li className = "homepageUserComponent">
                    <FreelancerprojectCard/>   
                </li>
           </ul>
      </div>
   )  
}

export default HomepageUser ;