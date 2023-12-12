import {FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import  {faLaptop,faBlog, faVideo, faImage, faFileContract,faUserAstronaut,faChalkboardUser,faTruck,faHospital} from '@fortawesome/free-solid-svg-icons' ;
import {Link} from 'react-router-dom' ;
import HeaderUser from "./HeaderUser";
const Domain = () => 
{
  return (  
    <div className = "RegisterContainer">  
   <HeaderUser/>  
   <div className = "Domain">
      <p className = "domainPara">
       Browse work in different categories  
      </p>
      <ul className = "domainCategory">
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faLaptop} className = "fontIcons" />
      <br/>
      <Link to ="/Dom1" className = "domLinking">
       IT  
       </Link>   
      </li>
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faBlog} className = "fontIcons" />
      <br/>   
      <Link to ="/Dom2" className = "domLinking">
       Content Writing  
       </Link>
      </li>
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faVideo} className = "fontIcons" />
      <br/>
      <Link to ="/Dom3" className = "domLinking">
       Video Editing  
       </Link>
      </li>
      </ul>
      <br/>
      <ul className = "domainCategory">
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faImage} className = "fontIcons" />
      <br/>
      <Link to ="/Dom4" className = "domLinking">
      Graphic Designing  
       </Link>  
      </li>
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faFileContract} className = "fontIcons" />
      <br/>
      <Link to ="/Dom5" className = "domLinking">
      Marketing 
       </Link> 
      </li>
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faUserAstronaut} className = "fontIcons" />
      <br/>
      <Link to ="/Dom6" className = "domLinking">
      Engineering and Science  
       </Link> 
      </li>
      </ul>
      <br/>
      <ul className = "domainCategory">
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faChalkboardUser} className = "fontIcons" />
      <br/>
      <Link to ="/Dom7" className = "domLinking">
      Teaching  
       </Link>   
      </li>
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faTruck} className = "fontIcons" />
      <br/>
      <Link to ="/Dom8" className = "domLinking">
      Transportation 
       </Link> 
      </li>
      <li className = "domainListItem">
      <FontAwesomeIcon icon = {faHospital} className = "fontIcons" />
      <br/>
      <Link to ="/Dom9" className = "domLinking">
      Medicine  
       </Link> 
      </li>
      </ul>
   </div> 
   </div>
  ) ;
}

export default Domain ;