import React, { Component } from "react";

class Div extends Component {

  constructor(){
    super();
    this.state = {
      division : 0
    }
  }

  div(e){
    e.preventDefault();

    var num1 = this.refs.num1.value;
    var num2 = this.refs.num2.value;
    var div = num1 / num2;
    this.setState({
      division : div
    })

  }

  render() {
    return (
      <div className="container">
        <h1>Division</h1> <hr />
        <form onSubmit={this.div.bind(this)}>
          <input type="text" ref="num1" placeholder="Enter first number" />
          <br /> <br />
          <input type="text" ref="num2" placeholder="Enter second number" />
          <br /> <br />
          <input type="submit" value="Divide" /> <br />
        </form>
        <h3>Division is : {this.state.division}</h3>
      </div>
    );
  }
}

export default Div;
