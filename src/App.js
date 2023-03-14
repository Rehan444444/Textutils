import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
// import { useState } from 'react';


import React,{useInsertionEffect, useState} from 'react';
import About from './components/About'

// import Layout from './components/Layout'
// import Alert from './components/Alert'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   link
// } from "react-Router-dom";


function App() {
  const[Mode, setMode]=useState('light');
  // const[alert,setAlert]=useState(null);


  // const showAlert=(message,type)=>{
  //      setAlert({
  //       msg:message,
  //       type:type
  //      })
  // }



  const toggleMode=()=>{
    if(Mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(26 38 80)';
      // showAlert('Dark mode has been Enable', 'Success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // showAlert('light mode has been Enable', 'Success');
    }
  }

  return (
   <> 
  <Navbar title="Textutils" aboutText="about us" mode={Mode} toggleMode={toggleMode}/>
  {/* <Alert alert={alert}/> */}
  
  {/* <Router> */}
  <div className="container">
  {/* <Switch> */}
  <Textform heading="Enter the text for analyse" mode={Mode}/>
          {/* <Route exact path="/about"> */}
          <About exact path="/about" component={About} mode={Mode} />
          {/* </Route>
          */}
          {/* <Route exact path="/" component={Textform}>  */}
          {/* <Textform heading="Enter the text for analyse" mode={Mode}/> */}
          {/* </Route> */}
          
          {/* <Textform heading="Enter the text for analyse" mode={Mode}/>
          // <About exact path="/About" component={About} mode={Mode} />
          {/* <Navbar/> */}
          {/* </Route>
           */}
           {/* </Switch> */}
              
  </div>
  {/* </Router> */}
 
 {/* <div className="loading">
  <Layout/>
 </div> */}
 
   
   </>
  );
}

export default App;

