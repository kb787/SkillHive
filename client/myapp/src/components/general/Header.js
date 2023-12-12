import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faClipboard, faBriefcase, faUser,faRightFromBracket,faRightToBracket} from '@fortawesome/free-solid-svg-icons' ;
import {Link} from 'react-router-dom' ;
const Header = () => {
    return (
         <div className = "Header">
              <header className = "homepageHeader">
              <ul className = "navItemsCollection">
                 <li className = "navItemsLogo">  
                      FreelanceWeb
                 </li> 
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faBriefcase} /> 
                   <Link to = "/Register" className = "linking">
                      Browse Work
                    </Link>  
                 </li>
               {/*  
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faUser} />    
                    <Link to = "/Freelancers" className = "linking">
                       Hire Freelancers
                    </Link> 
                 </li>
               */}  
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faRightToBracket} />    
                 <Link to = "/Login" className = "linking">
                       Login
                </Link>    
                 </li>
                 {/*
                 <li className = "navItems">
                 <FontAwesomeIcon icon = {faClipboard} />    
                 <Link to = "/Applications" className = "linking">
                       My Applications
                </Link>    
                 </li>
                */} 
              </ul>
           </header> 
         </div>
    )
}

export default Header ;