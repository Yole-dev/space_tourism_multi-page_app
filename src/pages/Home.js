import mobileBackground from "../assets/images/home/background-home-mobile.jpg";
import tabletBackground from "../assets/images/home/background-home-tablet.jpg";
import desktopBackground from "../assets/images/home/background-home-desktop.jpg";

export default function Home() {
  return (
    <div className="page-container">
      {/* Background image for home */}
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

      <div className="home-content">
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
