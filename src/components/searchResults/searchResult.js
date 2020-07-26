import React, { useState } from "react";
import {
  Media,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const SearchResult = (props) => {
  const { searchResult } = props;
  const [activeTab, setActiveTab] = useState("0");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const tabLinks = searchResult.highlights.map((highlight, index) => (
    <NavItem key={index}>
      <NavLink
        className={classnames({ active: activeTab === `${index}` })}
        onClick={() => {
          toggle(`${index}`);
        }}
      >
        {index + 1}
      </NavLink>
    </NavItem>
  ));

  const highlights = searchResult.highlights.map((highlight, index) => (
    <TabPane key={index} tabId={`${index}`}>
      <Row>
        <Col>
          <p
            className="search-result-preview"
            dangerouslySetInnerHTML={{ __html: highlight.snippet }}
          />
        </Col>
      </Row>
    </TabPane>
  ));

  return (
    <Media>
      <Media body className="parent-article">
        <Media heading>{searchResult.parentArticle.title}</Media>
        <Media>
          <h6>
            {searchResult.parentArticle.metaTitle} by{" "}
            {searchResult.parentArticle.author}
          </h6>
        </Media>
        <Nav tabs>{tabLinks}</Nav>
        <TabContent activeTab={activeTab}>{highlights}</TabContent>
      </Media>
    </Media>
  );
};

export default SearchResult;
