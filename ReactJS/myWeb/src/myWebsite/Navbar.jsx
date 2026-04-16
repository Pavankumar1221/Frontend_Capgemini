import React from 'react';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#333", padding: "1px", display:"flex", justifyContent:"space-evenly" }}>
      <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>Home</a>
      <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>About</a>
      <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>Contact</a>
      <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>Login</a>
    </div>
  );
};

export default Navbar;