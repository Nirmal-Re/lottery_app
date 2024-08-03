import React from "react";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#D9D9D9", padding: "10px" }}>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        <li style={{ display: "inline", marginRight: "20px" }}>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
