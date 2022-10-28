import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="images/logo1.png"
              alt="eggos logo"
              height="80px"
              width="281.6"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-links"
                to={{
                  pathname: "https://eggos-studios.gitbook.io/whitepaper/",
                }}
                target="_blank"
              >
                Whitepaper
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/stake" className="nav-links" onClick={closeMobileMenu}>
                Stake
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/store"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to={{ pathname: "https://twitter.com/EggosNFT" }}
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-links"
                to={{ pathname: "https://discord.gg/kF7AJ5DQ" }}
                target="_blank"
                aria-label="Discord"
              >
                <i class="fab fa-discord" />
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Mint
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Mint</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
