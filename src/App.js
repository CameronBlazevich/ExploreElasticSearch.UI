import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Container } from 'reactstrap';
import Select from 'react-select';
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

  handleParticipantSearchRefinement = (_, selectionMetadata) => {
    let refinementCriteria = { field: 'participants'};
    switch (selectionMetadata.action) {
      case "clear":
        this.clearAllRefinementCriteria();
        break;
      case "remove-value":
      case "pop-value":
        refinementCriteria.value = selectionMetadata.removedValue.value 
        this.updateRefinementCriteria(refinementCriteria);
        break;
      case "select-option":
        refinementCriteria.value = selectionMetadata.option.value;
        this.updateRefinementCriteria(refinementCriteria);
        break;
      default:
        console.log(`Unexpected selector action: ${selectionMetadata.action}`);
        break;
    }
  };
    
  updateRefinementCriteria = (refinementCriteria) => {
    this.props.refinementActions.updateRefinementCriteria(refinementCriteria);
  }

  clearAllRefinementCriteria = () => {
    this.props.refinementActions.clearAllRefinementCriteria();
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
                <Button size="sm" onClick={this.clearAllRefinementCriteria}>
                  clear all
                </Button>
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
              {this.props.searchCriteria.refinementCriteria.some(sc => sc.field === 'participants') && <h5>Participants Filter</h5>}
              <Select
                className="participant-dropdown"
                placeholder="Participants"
                closeMenuOnSelect={false}
                isMulti
                onChange={this.handleParticipantSearchRefinement}
                options={this.props.searchResults.participants.map(p => ({
                  value: p.displayText,
                  label: p.displayText
                }))}
              />
              {/* <RefinementList
                refinementListItems={this.props.searchResults.participants}
                onItemClick={this.handleParticipantSearchRefinement}
                attributeName="participants"
                refinementCriteria={
                  this.props.searchCriteria.refinementCriteria
                }
              /> */}
            </Row>
          </Col>

          <Col md="8">
            {this.props.refinedSearchResults && (
              <SearchResultCollection
                searchResults={this.props.refinedSearchResults}
              />
            )}
          </Col>
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
