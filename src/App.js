import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';
import Footer from "./footer";
import {Switch,Route, Redirect} from 'react-router-dom';
const App=()=>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/service' component={Services} />
      <Redirect to='/'/>
    </Switch>
    <Footer/>
    </>
  );


}

export default App;
