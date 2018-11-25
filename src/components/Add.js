import React, { Component } from "react";

class Add extends Component {

  constructor(){
    super();
    this.state = {
      addition : 0
    }
  }

  add(e){
    e.preventDefault();

    var num1 = this.refs.num1.value;
    var num2 = this.refs.num2.value;
    var sum = num1 + num2;
    this.setState({
      addition : sum
    })

  }

  render() {
    return (
      <div className="container">
        <h1>Addition</h1> <hr />
        <form onSubmit={this.add.bind(this)}>
          <input type="text" ref="num1" placeholder="Enter first number" />
          <br /> <br />
          <input type="text" ref="num2" placeholder="Enter second number" />
          <br /> <br />
          <input type="submit" value="Add" /> <br />
        </form>
        <h3>Addition is : {this.state.addition}</h3>
      </div>
    );
  }
}

export default Add;
