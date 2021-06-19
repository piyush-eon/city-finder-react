const useSearch = (query, cities) => {
  return cities?.filter((city) =>
    city.city.toLowerCase().includes(query.toLowerCase())
  );
};

export default useSearch;
