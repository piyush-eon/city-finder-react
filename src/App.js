import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TabBar from "./components/TabBar";
import MapContainer from "./components/MapContainer";

function App() {
  const [cities, setCities] = useState([]);
  const [searchTabs, setSearchTabs] = useState([]);
  const [searchResults, setSearchResults] = useState();
  const [viewport, setViewport] = useState({
    latitude: 28.66,
    longitude: 77.23,
    width: "99%",
    height: "99%",
    zoom: 10,
  });

  const fetchCities = async () => {
    const { data } = await axios.get(
      "https://run.mocky.io/v3/26fef364-f011-4e5d-8f00-7928c3409504"
    );

    setCities(data.cities);
  };

  const searchHandler = (query, cities) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    setSearchResults(
      cities?.filter((city) =>
        city.city.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const SearchTabHandler = (res) => {
    if (searchTabs.some((tab) => tab.lat.toFixed(1) === res.lat.toFixed(1)))
      return;

    setViewport({
      ...viewport,
      latitude: res.lat,
      longitude: res.lng,
    });

    setSearchTabs([...searchTabs.slice(-2), res]);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="container__input">
          {searchTabs.map((tab) => (
            <TabBar
              key={tab.lat}
              viewport={viewport}
              setViewport={setViewport}
              tab={tab}
              searchTabs={searchTabs}
              setSearchTabs={setSearchTabs}
            />
          ))}
          <input
            placeholder="Search for a city..."
            className="container__input--search"
            type="text"
            onChange={(e) => {
              searchHandler(e.target.value, cities);
            }}
          />
        </div>
        <MapContainer
          searchResults={searchResults}
          SearchTabHandler={SearchTabHandler}
          viewport={viewport}
          setViewport={setViewport}
          searchTabs={searchTabs}
        />
      </div>
    </div>
  );
}

export default App;
