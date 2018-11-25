import React, { Component } from "react";

class Mod extends Component {

  constructor(){
    super();
    this.state = {
      modulus : 0
    }
  }

  mod(e){
    e.preventDefault();

    var num1 = this.refs.num1.value;
    var num2 = this.refs.num2.value;
    var mod = num1 % num2;
    this.setState({
      modulus : mod
    })

  }

  render() {
    return (
      <div className="container">
        <h1>Modulus</h1> <hr />
        <form onSubmit={this.mod.bind(this)}>
          <input type="text" ref="num1" placeholder="Enter first number" />
          <br /> <br />
          <input type="text" ref="num2" placeholder="Enter second number" />
          <br /> <br />
          <input type="submit" value="Mod" /> <br />
        </form>
        <h3>Modulus is : {this.state.modulus}</h3>
      </div>
    );
  }
}

export default Mod;
