import React from 'react';
import Common from './Common';
import abtimg from "../src/image/img1.jpg";

const About=()=>{
  return(
    <Common
    mtxt="Welcome to About Page"
    totxt="/contact"
    img={abtimg}
    btname="Contact Now"/>
  );

}

export default About;