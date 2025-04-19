import mobileBackground from "../assets/images/crew/background-crew-mobile.jpg";
import tabletBackground from "../assets/images/crew/background-crew-tablet.jpg";
import desktopBackground from "../assets/images/crew/background-crew-desktop.jpg";

export default function Crew() {
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
