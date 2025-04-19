import mobileBackground from "../assets/images/technology/background-technology-mobile.jpg";
import tabletBackground from "../assets/images/technology/background-technology-tablet.jpg";
import desktopBackground from "../assets/images/technology/background-technology-desktop.jpg";

export default function Technology() {
  return (
    <div className="page-container">
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
    </div>
  );
}
