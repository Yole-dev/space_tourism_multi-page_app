import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/shared/logo.svg";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app-container">
      {/* Header/Navigation */}
      <header className="header">
        <img src={logo} alt="company logo" className="logo" />

        {!isOpen && (
          <ion-icon
            name="menu-sharp"
            className="hamburger-icon"
            onClick={handleNavToggle}
          ></ion-icon>
        )}

        <hr className="header-divider" />

        {/* Desktop Navigation */}
        <nav className="nav-bar desktop-nav">
          <NavList />
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav-container">
            <ion-icon
              name="close-sharp"
              className="close-icon"
              onClick={handleNavToggle}
            ></ion-icon>

            <ul className="mobile-nav-bar">
              <NavList />
            </ul>
          </div>
        )}
      </header>

      {/* main content */}
      <main>{children}</main>
    </div>
  );
}

function NavList() {
  return (
    <>
      <li className="active">
        <Link to="/">
          <span className="desktop-home-tag ">00</span> home
        </Link>
      </li>
      <li>
        <Link to="/destination">
          <span>01</span> destination
        </Link>
      </li>
      <li>
        <Link to="/crew">
          <span>02</span> crew
        </Link>
      </li>
      <li>
        <Link to="/technology">
          <span>03</span> technology
        </Link>
      </li>
    </>
  );
}
