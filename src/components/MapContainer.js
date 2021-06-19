import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import SearchResultBox from "./SearchResultBox";

const MapContainer = ({
  searchResults,
  SearchTabHandler,
  viewport,
  setViewport,
  searchTabs,
}) => {
  return (
    <div className="container__mapbox">
      <SearchResultBox
        SearchTabHandler={SearchTabHandler}
        searchResults={searchResults}
      />
      {searchTabs.length === 0 ? (
        <h1 className="container__map--map">Add a city to sneak peak</h1>
      ) : (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
          onViewportChange={(viewport) =>
            setViewport({
              ...viewport,
              transitionDuration: 1500,
              transitionInterpolator: new FlyToInterpolator(),
            })
          }
        ></ReactMapGL>
      )}
    </div>
  );
};

export default MapContainer;
