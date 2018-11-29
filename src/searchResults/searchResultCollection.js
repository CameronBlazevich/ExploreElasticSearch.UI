import React from "react";
import SearchResult from "./searchResult";

function SearchResultCollection(props) {
  const searchResults = props.searchResults.map(sr => (
    <SearchResult searchResult={sr} />
  ));
  return <div>{searchResults}</div>;
}

export default SearchResultCollection;
