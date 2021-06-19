const SearchResultBox = ({ SearchTabHandler, searchResults }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 5px 5px grey",
        zIndex: 10,
      }}
    >
      {searchResults?.slice(0, 5).map((res) => {
        return (
          <span
            key={res.city}
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={() => SearchTabHandler(res)}
          >
            {res.city}
          </span>
        );
      })}
    </div>
  );
};

export default SearchResultBox;
