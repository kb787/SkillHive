import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faClipboard, faBriefcase, faUser,faRightFromBracket,faRightToBracket} from '@fortawesome/free-solid-svg-icons' ;
import {Link} from 'react-router-dom' ;

const Homepage = () => 
{
    return (
       <div className = "Homepage">
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
           <main className = "homepageMain">
       <ul className = "cardCollection">
            <li className = "collectionItems">
            <div className="homepageCard" style={{ width: "25rem", height: "15rem"}}>
              <div className="cardBody">
               <h5 className="homepageCardHeading">Post Projects</h5>
               <p className="homepageCardBody">
                By filling others details of projects such as tech, number of days
                required,project description
               </p>
              </div>
           </div>
            </li>
            <li className = "collectionItems">
            <div className="homepageCard" style={{ width: "25rem", height: "15rem" }}>
              <div className="cardBody">
               <h5 className="homepageCardHeading">Choose Freelancers</h5>
               <p className="homepageCardBody">
                From different freelancers select the profile that best matches the skillset.
               </p>
              </div>
           </div>
            </li>
       </ul>
       <br/>
       <br/>
       <ul className = "cardCollection">
            <li className = "collectionItems">
            <div className="homepageCard" style={{ width: "25rem", height: "15rem" }}>
              <div className="cardBody">
               <h5 className="homepageCardHeading">Bid for projects</h5>
               <p className="homepageCardBody">
                Search for jobs that suits best to your skillset and bid for it. Interact with clients.
               </p>
              </div>
           </div>
            </li>
            <li className = "collectionItems">
            <div className="homepageCard" style={{ width: "25rem", height: "15rem" }}>
              <div className="cardBody">
               <h5 className="homepageCardHeading">Get your work done</h5>
               <p className="homepageCardBody">
               Different types of services available such as web design, software developement, app development, content writing and many others.
               </p>
              </div>
           </div>
            </li>
       </ul>
    </main> 
       </div>  
    )
}

export default Homepage ;