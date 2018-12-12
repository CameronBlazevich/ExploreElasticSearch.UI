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
  const highlights = searchResult.highlights.map(highlight => <p
    className="search-result-preview"
    dangerouslySetInnerHTML={{ __html: highlight.snippet }}
  />)
  return (
    <Media>
      <Media body className="parent-article">
        <Media heading>{searchResult.parentArticle.title}</Media>
        {highlights}
      </Media>
    </Media>
  );
}

export default SearchResult;
