import React, { Component } from "react";

class Mul extends Component {

  constructor(){
    super();
    this.state = {
      multiplication : 0
    }
  }

  mul(e){
    e.preventDefault();

    var num1 = this.refs.num1.value;
    var num2 = this.refs.num2.value;
    var mul = num1 * num2;
    this.setState({
      multiplication : mul
    })

  }

  render() {
    return (
      <div className="container">
        <h1>Multiplication</h1> <hr />
        <form onSubmit={this.mul.bind(this)}>
          <input type="text" ref="num1" placeholder="Enter first number" />
          <br /> <br />
          <input type="text" ref="num2" placeholder="Enter second number" />
          <br /> <br />
          <input type="submit" value="Multiply" /> <br />
        </form>
        <h3>Multiplication is : {this.state.multiplication}</h3>
      </div>
    );
  }
}

export default Mul;
