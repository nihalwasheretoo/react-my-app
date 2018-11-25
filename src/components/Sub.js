import React, { Component } from "react";

class Sub extends Component {

  constructor(){
    super();
    this.state = {
      subtraction : 0
    }
  }

  sub(e){
    e.preventDefault();

    var num1 = this.refs.num1.value;
    var num2 = this.refs.num2.value;
    var sub = num1 - num2;
    this.setState({
      subtraction : sub
    })

  }

  render() {
    return (
      <div>
        <h1>Subtraction</h1> <hr />
        <form onSubmit={this.sub.bind(this)}>
          <input type="text" ref="num1" placeholder="Enter first number" />
          <br /> <br />
          <input type="text" ref="num2" placeholder="Enter second number" />
          <br /> <br />
          <input type="submit" value="Subtract" /> <br />
        </form>
        <h3>Subtraction is : {this.state.subtraction}</h3>
      </div>
    );
  }
}

export default Sub;
