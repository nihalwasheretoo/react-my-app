import React, { Component } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Calculator extends Component {
  render() {
    return (
         <div className="container">
         <h1>Calculator App</h1> <hr />
          <ul>
            <li><Link to="/add">Addition</Link></li> <br />
            <li><Link to="/sub">Subtraction</Link></li> <br />
            <li><Link to="/mul">Multiplication</Link></li> <br />
            <li><Link to="/div">Division</Link></li> <br />
            <li><Link to="/mod">Modulus</Link></li> <br />
          </ul>
        </div>
      )
  }
}

export default Calculator;
