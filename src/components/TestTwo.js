import React, { Component } from 'react';

class TestTwo extends Component {

	handleSubmit(e){
		
		e.preventDefault();
		let name = this.refs.name.value;
		this.props.setName(name);
	}



  render() {

  	var counter = this.props.test;


    return (
      <div>
      	<h3>TestTwo</h3> <br />
      	Props : {counter} <br />


      	New Prop : <br />

      	<form onSubmit={this.handleSubmit.bind(this)}>
      		<input type="text" ref="name" />
      		<input type="submit" value="Click Me!" />
      	</form>

      </div>
    );
  }
}

export default TestTwo;