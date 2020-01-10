/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
import React, { Component, useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { Spinner, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./App.css";
import { Subject } from "rxjs";
import { range } from "../node_modules/rxjs/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCompress,
  faFileExport,
  faFileImport,
  faSync,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import dev from "./devMode";

class App extends Component {
  state = {};

  constructor() {
    super();
    dev();
    window.devMode = this.devMode.bind(this);
    this.developerMode = new Subject(false);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  devMode() {
    // eslint-disable-next-line no-undef, no-console
    console.log("sinottico-react version: " + __VERSION__);
    this.developerMode.next(true);
  }

  async componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div
        className="App"
        style={{
          width: this.state.width,
          height: this.state.height,
          overflow: "hidden"
        }}
      >
        <header className="App-header">HELLO WORLD</header>

        <PageRefContext.Provider value={this.PageRef}>
          <Router
            basename={
              window.location.href.includes("sinottici")
                ? window.location.href
                    .split("/")
                    .slice(0, -1)
                    .splice(3)
                    .join("/") //'/sinottici/test'
                : ""
            }
          >
            <Switch>
              <Route path={"/"} />
            </Switch>
          </Router>
        </PageRefContext.Provider>
      </div>
    );
  }
}
export default App;
const PageRefContext = React.createContext();
