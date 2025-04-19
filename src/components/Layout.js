import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        <div className="desktop-nav">
          <ul>
            <NavList />
          </ul>
        </div>

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
  const location = useLocation();

  const navItems = [
    { path: "/", number: "00", name: "home" },
    { path: "/destination", number: "01", name: "destination" },
    { path: "/crew", number: "02", name: "crew" },
    { path: "/technology", number: "03", name: "technology" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          <Link to={item.path}>
            <span>{item.number}</span> {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
