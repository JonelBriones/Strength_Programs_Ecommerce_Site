import React from "react";

function Navbar() {
  return (
    <div id="navbar">
      <div className="navlinks">
        <h1>Strength</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Programs</a>
          </li>
          <li>
            <a href="">
              <img src="/icons/cart-outline.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
