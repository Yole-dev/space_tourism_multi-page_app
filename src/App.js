import mobileBackground from "./assets/images/home/background-home-mobile.jpg";
import tabletBackground from "./assets/images/home/background-home-tablet.jpg";
import desktopBackground from "./assets/images/home/background-home-desktop.jpg";
import logo from "./assets/images/shared/logo.svg";

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
        <Header />
        <Main />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="company logo" className="logo" />

      <ion-icon name="menu-outline" className="hamburger-icon"></ion-icon>
    </div>
  );
}

function Main() {
  return <div className="main-body"></div>;
}
