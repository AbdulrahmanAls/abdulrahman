import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Bio from "./Bio";
import Education from "./Education";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
              <div className="row">
                      <div className="col-12 ">
                          <h1 className="text-uppercase  text-secondary">Abdulrahman Alsalamah</h1>
                          <h3 className="">Web Developer</h3>
                      </div>
              </div>
              <hr />
              <ul className="header">
                <li> <Link to="/">Bio</Link></li>
                <li> <Link to="/Education">Education</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
              </ul>
              <hr />
              <div className="content">
                <Route exact path="/" component={Bio}/>
                <Route path="/Education" component={Education}/>
                <Route path="/contact" component={Contact}/>
              </div>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
