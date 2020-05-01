import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './Clock';
import Dropdown from './Dropdown'

import * as serviceWorker from './serviceWorker';
// import Lifecycle from './Lifecycle';
import Employee from './Employee';


// setInterval(()=>{
//   var today = new Date();
//   var hours =today.getHours();
//   var minutes = today.getMinutes();
//   var seconds = today.getSeconds();
// ReactDOM.render(
//   <React.StrictMode>
//     <Clock title='My React Clock !!!'
//            hours={hours} minutes={minutes} seconds={seconds}></Clock>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// }, 1000)

ReactDOM.render(
  <React.StrictMode>
    <Dropdown caption="Select Courses"/>
     {/* <Lifecycle></Lifecycle> */}
    <hr/> 
     <Employee></Employee>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
