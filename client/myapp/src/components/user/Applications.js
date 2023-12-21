import axios from 'axios' ;
import {useState} from 'react' ;
import ApplicationsCard from './ApplicationsCard';
import HeaderUser from './HeaderUser';
const Applications = () => 
{ 
  return (
      <div className = "ApplicationsContainer">  
         <div className = "Applications">
            <HeaderUser/>     
            <ApplicationsCard/>
           </div>
      </div>
  )
}

export default Applications ;