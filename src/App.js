import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Container } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import SearchForm from './searchForm';
import SearchResultCollection from './searchResults/searchResultCollection';
import RefinementList from './searchResults/refinementList';
import { refineSearchResults } from './selectors';
import * as searchActions from './actions/searchActions';
import * as refinementActions from './actions/refinementActions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

class App extends Component {
  handleSearchRequest = searchTerm => {
    this.props.searchActions.doSearch(searchTerm);
  };
  handleAutherSearchRefinement = author => {
    const refinementCriteria = { field: 'author', value: author };
    this.props.refinementActions.updateRefinementCriteria(refinementCriteria);
  };
  handleParticipantSearchRefinement = participant => {
    const refinementCriteria = { field: 'participants', value: participant };
    this.props.refinementActions.updateRefinementCriteria(refinementCriteria);
  };
  render() {
    return (
      <Container className="App">
        <header className="main-search-bar">
          <div className="col-md-4">
            <SearchForm handleSubmit={this.handleSearchRequest} />
          </div>
          {false && <img src={logo} className="App-logo" alt="logo" />}
        </header>

        <Row>
          <Col md="4" lg="4" sm="4">
            <Row className="refinement-list clear-all-filters-container">
              {this.props.searchCriteria.refinementCriteria.length > 0 && (
                <Button size="sm">clear all</Button>
              )}
            </Row>
            <Row className="refinement-list">
              <RefinementList
                refinementListItems={this.props.searchResults.authors}
                onItemClick={this.handleAutherSearchRefinement}
                attributeName="author"
                refinementCriteria={
                  this.props.searchCriteria.refinementCriteria
                }
              />
            </Row>
            <Row className="refinement-list">
              <RefinementList
                refinementListItems={this.props.searchResults.participants}
                onItemClick={this.handleParticipantSearchRefinement}
                attributeName="participants"
                refinementCriteria={
                  this.props.searchCriteria.refinementCriteria
                }
              />
            </Row>
          </Col>

          <div className="col-md-8">
            {this.props.refinedSearchResults && (
              <SearchResultCollection
                searchResults={this.props.refinedSearchResults}
              />
            )}
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  refinedSearchResults: refineSearchResults(state),
  searchCriteria: state.searchCriteria
});

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
    refinementActions: bindActionCreators(refinementActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
