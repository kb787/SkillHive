import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom' ;
import Homepage from "./components/general/Homepage" ; 
import Register from "./components/authentification/Register" ;
import Login from "./components/authentification/Login" ;
import Domain from "./components/projectApplication/Domain" ;
import Dom1 from "./components/projectApplication/Dom1" ;
import Dom2 from "./components/projectApplication/Dom2" ;
import Dom3 from "./components/projectApplication/Dom3" ;
import Dom4 from "./components/projectApplication/Dom4" ;
import Dom5 from "./components/projectApplication/Dom5" ;
import Dom6 from "./components/projectApplication/Dom6" ;
import Dom7 from "./components/projectApplication/Dom7" ;
import Dom8 from "./components/projectApplication/Dom8" ;
import Dom9 from "./components/projectApplication/Dom9" ;
import Profile from "./Profile" ;
import Post from "./components/freelancer/Post" ;
import Applications from "./components/user/Applications" ;
import ApplicationsCard from './components/user/ApplicationsCard';
import FreelancerCard from './components/freelancer/FreelancerCard';
import Freelancers from './components/freelancer/Freelancers';
import HomepageUser from './components/user/HomepageUser';
import ProjectBidding from './components/projectApplication/ProjectBidding';
import NewProfile from './components/user/NewProfile';
import TokenizedUser from './components/user/TokenizedUserPage';
import RecommendationContainer from './components/freelancer/RecommendationContainer';
// import ProtectedRouting from './components/authentification/ProtectedRouting';
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
            <Route path = "/NewProfile" element = {<NewProfile/>} />
            <Route path = "/TokenizedUser" element = {<TokenizedUser/>} />
            <Route path = "/RecommendationContainer" element = {<RecommendationContainer/>} />
         </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
