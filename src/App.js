import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./searchForm";
import SearchResultCollection from "./searchResults/searchResultCollection";
import * as searchActions from "./actions/searchActions";

class App extends Component {
  handleSearchRequest = searchTerm => {
    this.props.searchActions.doSearch(searchTerm);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {false && <img src={logo} className="App-logo" alt="logo" />}
        </header>

        <Row>
          <div className="col-md-4" />
          <div className="col-md-8">
            <SearchForm handleSubmit={this.handleSearchRequest} />
            {this.props.searchResults && this.props.searchResults.results && (
              <SearchResultCollection
                searchResults={this.props.searchResults.results}
              />
            )}
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
