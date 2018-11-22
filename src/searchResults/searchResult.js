import React from "react";

function SearchResult(props) {
  const strippedText = props.searchResult.replace(/\r\n\r\n/g, "\r\n");
  const splitText = strippedText
    .split("\r\n")
    .map(text => <p dangerouslySetInnerHTML={{ __html: text }} />);
  return <div className="search-result row">{splitText}</div>;
}

export default SearchResult;
