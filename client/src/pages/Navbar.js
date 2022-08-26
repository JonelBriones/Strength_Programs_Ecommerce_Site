import React, { useState } from "react";

function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(true);
  const changeBackground = () => {
    if (window.scrollY > 950) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div id={navbarBackground ? "navbar" : "navbar-active"}>
      <div className="navlinks">
        <a href="#showcase">
          <h1>Strength</h1>
        </a>
        <ul>
          <li>
            <a href="./Home.js">Home</a>
          </li>
          <li>
            <a href="#programs">Programs</a>
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
