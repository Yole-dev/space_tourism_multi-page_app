import mobileBackground from "../assets/images/destination/background-destination-mobile.jpg";
import tabletBackground from "../assets/images/destination/background-destination-tablet.jpg";
import desktopBackground from "../assets/images/destination/background-destination-desktop.jpg";

// importing the data API
import useJsonData from "../hooks/useJsonData";

export default function Destination() {
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

      <div className="destination-container">
        <DestinationDetails />
      </div>
    </div>
  );
}

function DestinationDetails() {
  const { data, loading, error } = useJsonData("data.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message} </div>;
  if (!data?.destinations) return <div>No destination data found</div>;

  const destinationList = data?.destinations?.map((d) => d.name) || [];

  const destinationImages = data.destinations.map((d) => d.images.webp);
  console.log(destinationImages[0]);

  const destinationDescription =
    data?.destinations?.map((d) => d.description) || [];

  const destinationDistance = data?.destinations?.map((d) => d.distance);

  const destinationDuration = data?.destinations?.map((d) => d.travel);

  return (
    <>
      <p className="destination-heading">
        <span>01</span>
        pick your destination
      </p>

      <div className="destination-content-container">
        <img src={destinationImages[0]} alt="" />

        <div className="destination-description">
          <ul>
            {destinationList.map((destination) => (
              <li key={destination} className="active">
                {destination}
              </li>
            ))}
          </ul>

          <p className="destination-title">{destinationList[0]}</p>

          <p className="destination-description-text">
            {destinationDescription[0]}
          </p>

          <hr />

          <div className="destination-duration">
            <div>
              <p>avg.distance</p>

              <p> {destinationDistance[0]} </p>
            </div>

            <div>
              <p>est. travel time</p>

              <p>{destinationDuration[0]} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
