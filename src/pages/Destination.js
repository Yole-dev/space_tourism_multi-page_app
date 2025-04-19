import mobileBackground from "../assets/images/destination/background-destination-mobile.jpg";
import tabletBackground from "../assets/images/destination/background-destination-tablet.jpg";
import desktopBackground from "../assets/images/destination/background-destination-desktop.jpg";

export default function Destionation() {
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
