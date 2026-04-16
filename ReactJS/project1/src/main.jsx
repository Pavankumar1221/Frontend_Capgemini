
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import Pavan from './Pavan'
import FunComp from './FunComp'
import Family from './Family'
import Cricketers from './Cricketers/Cricketers'

createRoot(document.getElementById('root')).render(   
    // React.createElement("div",null, React.createElement("p",null, "Mind is draining"),React.createElement("h2",null,"We have to wait for 30 min"),React.createElement("h1",null,"Students mind is getting blast"))
  // <div>
  //   <p>My name is Pavan Kumar</p>
  //   <h2>My Weight is 68kgs</h2>
  //   <h1>My Height is 5'10</h1>
  // </div>


  // <App/>
  // <Pavan/>
  // <FunComp/>
  // <Family/>
  <Cricketers/>
)
