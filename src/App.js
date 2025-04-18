import mobileBackground from "./assets/images/home/background-home-mobile.jpg";
import tabletBackground from "./assets/images/home/background-home-tablet.jpg";
import desktopBackground from "./assets/images/home/background-home-desktop.jpg";
import logo from "./assets/images/shared/logo.svg";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Pages />
    </div>
  );
}

function Pages() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <div className="bg-container">
        <img
          src={mobileBackground}
          alt="mobile background"
          className="mobile-bg"
        />

        <img
          src={tabletBackground}
          alt="tablet background"
          className="tablet-bg"
        />

        <img
          src={desktopBackground}
          alt="desktop background"
          className="desktop-bg"
        />
      </div>

      <div className="home-container">
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
        <Header onNavToggle={handleNavToggle} open={isOpen} />

        <Main />
      </div>
    </div>
  );
}

function Header({ onNavToggle, open }) {
  return (
    <div className="header">
      <img src={logo} alt="company logo" className="logo" />

      {!open && (
        <ion-icon
          name="menu-outline"
          className="hamburger-icon"
          onClick={onNavToggle}
        ></ion-icon>
      )}

      <hr />

      <ul className="nav-bar">
        <NavList />
      </ul>
    </div>
  );
}

function NavList() {
  return (
    <>
      <li className="active">
        <span className="desktop-home-tag ">00</span> home
      </li>
      <li>
        <span>01</span> destination
      </li>
      <li>
        <span>02</span> crew
      </li>
      <li>
        <span>03</span> technology
      </li>
    </>
  );
}

function Main() {
  return (
    <div className="main-body">
      <div>
        <div className="heading-text-content">
          <p className="heading1">so, you want to travel to</p>
          <p className="heading2">space</p>
          <p className="hero-text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="explore-btn">explore</div>
      </div>
    </div>
  );
}
