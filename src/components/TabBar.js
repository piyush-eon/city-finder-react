import "./styles.scss";

const TabBar = ({ tab, viewport, setViewport, searchTabs, setSearchTabs }) => {
  const removeHandler = () => {
    setSearchTabs(
      searchTabs.filter((res) => parseInt(res.lat) !== parseInt(tab.lat))
    );
  };

  return (
    <div className="tab">
      <span
        className={`tab__radio ${
          parseInt(viewport.latitude) === parseInt(tab.lat)
            ? "tab__radio--select"
            : ""
        }`}
        onClick={() =>
          setViewport({
            ...viewport,
            latitude: tab.lat,
            longitude: tab.lng,
          })
        }
      />
      <span className="tab__city">{tab.city}</span>
      <span className="tab__x" onClick={removeHandler}>
        X
      </span>
    </div>
  );
};

export default TabBar;
