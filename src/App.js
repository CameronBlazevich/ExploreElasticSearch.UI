import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./searchForm";
import HighlightApi from "./api/highlightApiMock";

class App extends Component {
  render() {
    HighlightApi.getHighlights().then(result => console.log(result));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchForm />
        </header>
      </div>
    );
  }
}

export default App;
