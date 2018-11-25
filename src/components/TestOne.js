import React, { Component } from 'react';
import TestTwo from './TestTwo';

class TestOne extends Component {

	handleSubmit(name){
  		this.props.setName(name);
  	}

  render() {

  	var counter = this.props.test;



    return (
      <div>
      	<h3>TestOne</h3> <br />
      	Props : {counter} <br />
      	<TestTwo test="testtwo" setName={this.handleSubmit.bind(this)} /> <br />
      </div>
    );
  }
}

export default TestOne;