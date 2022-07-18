import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from "../src/image/img2.jpg";
import Common from './Common';

const Home=()=>{
  return(
   <Common
   mtxt="Grow your Business with"
   totxt="/service"
   img={homeimg}
   btname="Get Started"/>
  );

}

export default Home;
