import React from "react";
import { Media } from "reactstrap";
// function SearchResult(props) {
//   const strippedText = props.searchResult.replace(/\r\n\r\n/g, "\r\n");
//   const splitText = strippedText
//     .split("\r\n")
//     .map(text => <p dangerouslySetInnerHTML={{ __html: text }} />);
//   return <div className="search-result row">{splitText}</div>;
// }

function SearchResult({ searchResult }) {
  return (
    <Media>
      <Media body>
        <Media heading>{searchResult.episodeInfo.title}</Media>
        <p
          className="search-result-preview"
          dangerouslySetInnerHTML={{ __html: searchResult.text }}
        />
      </Media>
    </Media>
  );
}

export default SearchResult;
