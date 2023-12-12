import HeaderUser from "D:/FreelancingWebsite/client/myapp/src/components/user/HeaderUser" ;
import FreelancerprojectCard from "D:/FreelancingWebsite/client/myapp/src/components/projectApplication/FreelancingprojectCard" ;
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