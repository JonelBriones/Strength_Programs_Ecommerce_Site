import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="footer__links">
        <ul>
          <li className="footer__link footer__description">
            <h1>Strength</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              cumque qui voluptatibus, eligendi repellendus quaerat?
            </p>
          </li>
          {/* <li className="footer__link">
            <h1>About</h1>
            <a href="./About.js">Blog</a>
          </li> */}
          <li className="footer__link">
            <h1>Programs</h1>
            <a href="#programs">Training Programs</a>
          </li>
        </ul>
      </div>
      <div className="footer__links socials">
        <a href="./Home.js">
          <img
            src="/icons/icon-facebook.svg"
            alt="facebook"
            className="footer_socials"
          />
        </a>
        <a href="./Home.js">
          <img
            src="/icons/icon-instagram.svg"
            alt="instagram"
            className="footer_socials"
          />
        </a>
        <a href="./Home.js">
          <img
            src="/icons/icon-twitter.svg"
            alt="twitter"
            className="footer_socials"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
