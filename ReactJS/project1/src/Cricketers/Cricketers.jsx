import React from 'react'
import Hardik from './Hardik'
import Rohit from './Rohit'
import Virat from './Virat'
import Bumbrah from './Bumbrah'

const Cricketers = () => {
  return (
    <div style={{ width: "500px", height:"400px", border: "1px solid black", backgroundColor:"beige", color:"black"  }}>
        <h1>World Class Cricketers List:</h1>
        <hr />
        <Hardik/>
        <hr />
        <Rohit/>
        <hr />
        <Virat/>
        <hr />
        <Bumbrah/>
    </div>
  )
}

export default Cricketers