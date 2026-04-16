import React from 'react';
import image from '../assests/image.png';

const Section = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img src={image} alt="player" style={{ width: "300px" }} />

      <p><b>Name of the Cricketer:</b> Rohit Sharma</p>
      <p><b>Date of Birth:</b> 30 April 1987</p>
      <p><b>Matches Played:</b> 200+</p>
      <p><b>Records: </b>3 ODI double centuries</p>
      <button style={{color:"black",backgroundColor:"lightblue",height:"35px", width:"60px", borderRadius:"10px"}}>Fallow</button>
    </div>
  );
};

export default Section;