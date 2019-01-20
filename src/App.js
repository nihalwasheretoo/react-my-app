import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Add from "./components/Add";
import Sub from "./components/Sub";
import Mul from "./components/Mul";
import Div from "./components/Div";
import Mod from "./components/Mod";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <div>
              <Route exact path="/" component={Calculator} />
            </div>
            <div>
              <Route exact path="/add" component={Add} />
            </div>
            <div>
              <Route exact path="/sub" component={Sub} />
            </div>
            <div>
              <Route exact path="/mul" component={Mul} />
            </div>
            <div>
              <Route exact path="/div" component={Div} />
            </div>
            <div>
              <Route exact path="/mod" component={Mod} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
