import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faClipboard, faBriefcase, faUser,faRightFromBracket,faRightToBracket,faHome,faIdCard} from '@fortawesome/free-solid-svg-icons' ;
import {Link} from 'react-router-dom' ;
const HeaderTokenized = () => {
    return (
         <div className = "Header">
              <header className = "homepageHeader">
              <ul className = "navItemsCollection">
                 <li className = "navItemsLogo">  
                      FreelanceWeb
                 </li> 
                 <li className = "navItems">
              <FontAwesomeIcon icon = {faBriefcase} /> 
                   <Link to = "/Domain" className = "linking">
                      Browse Work
                    </Link>  
                 </li>
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faUser} />    
                    <Link to = "/Freelancers" className = "linking">
                       Hire Freelancers
                    </Link> 
                 </li> 
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faClipboard} />    
                 <Link to = "/Applications" className = "linking">
                       My Applications
                </Link>    
                 </li> 
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faUser} />    
                 <Link to = "/NewProfile" className = "linking">
                       My Profile
                </Link>    
                 </li>
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faHome} />    
                 <Link to = "/HomepageUser" className = "linking">
                       Home
                </Link>    
                 </li>
              </ul>
           </header> 
         </div>
    )
}

export default HeaderTokenized ;