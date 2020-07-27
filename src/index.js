import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import configureStore from "./store";
import initialState from "./initialState";
import "./index.css";
import App from "./App";
import Transcript from "./components/playableTranscript/transcript";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/playableTranscript/:mediaId" component={Transcript} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
