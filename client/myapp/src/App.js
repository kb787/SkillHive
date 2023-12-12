import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom' ;
import Homepage from "./Homepage" ; 
import Register from "./Register" ;
import Login from "./Login" ;
import Domain from "./Domain" ;
import Dom1 from "./Dom1" ;
import Dom2 from "./Dom2" ;
import Dom3 from "./Dom3" ;
import Dom4 from "./Dom4" ;
import Dom5 from "./Dom5" ;
import Dom6 from "./Dom6" ;
import Dom7 from "./Dom7" ;
import Dom8 from "./Dom8" ;
import Dom9 from "./Dom9" ;
import Profile from "./Profile" ;
import Post from "./Post" ;
import Applications from "./Applications" ;
import ApplicationsCard from './ApplicationsCard';
import FreelancerCard from './FreelancerCard';
import Freelancers from './Freelancers';
import HomepageUser from './HomepageUser';
import ProjectBidding from './ProjectBidding';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path ="/" element = {<Homepage/>}/> 
            <Route path ="/Register" element = {<Register/>} />
            <Route path ="/Login" element = {<Login/>} />
            <Route path = "/Domain" element = {<Domain/>} /> 
            <Route path = "/Dom1" element = {<Dom1/>} />
            <Route path = "/Dom2" element = {<Dom2/>} /> 
            <Route path = "/Dom3" element = {<Dom3/>} />
            <Route path = "/Dom4" element = {<Dom4/>} />
            <Route path = "/Dom5" element = {<Dom5/>} />
            <Route path = "/Dom6" element = {<Dom6/>} />
            <Route path = "/Dom7" element = {<Dom7/>} /> 
            <Route path = "/Dom8" element = {<Dom8/>} />
            <Route path = "/Dom9" element = {<Dom9/>} />
            <Route path = "/Profile" element = {<Profile/>} /> 
            <Route path = "/Post" element = {<Post/>} />
            <Route path = "/Applications" element = {<Applications/>} />
            <Route path = "/ApplicationsCard" element = {<ApplicationsCard/>} />
            <Route path = "/FreelancerCard" element = {<FreelancerCard/>} /> 
            <Route path = "/Freelancers" element = {<Freelancers/>} />
            <Route path = "/HomepageUser" element = {<HomepageUser/>} />
            <Route path = "/ProjectBidding" element = {<ProjectBidding/>} />  
         </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
