import React from "react";
import SearchResult from "./searchResult";

function SearchResultCollection(props) {
  const searchResults = props.searchResults.map(sr => (
    <SearchResult searchResult={sr} />
  ));
  return <div className="container">{searchResults}</div>;
}

export default SearchResultCollection;
