import React, { Component } from 'react';

class AddCourse extends Component {

	constructor(){
		super();

		this.state = {
			newCourse : {}
		}
	}

	static defaultProps = {
		categories : ['Technology','Scientific','Medical']
	}

	handleSubmit(e){
 
		// this.setState({},function(){
		// SYNTAX
		// });

			if(this.refs.title.value === ''){
				alert('Value of title is required...');
			}else{
				this.setState({
					newCourse : {
					// Add ID
					title : this.refs.title.value,
					category : this.refs.category.value
				}},
				function(){
					// console.log(this.state);
					this.props.addCourse(this.state.newCourse);
				});
			}
		
		e.preventDefault();
	}

  render() {
  	let categoryOptions = this.props.categories.map(category => {
  		return (
  				<option key={category} value={category}>{category}</option>
  			)
  	});
  	

    return (
      <div className="AddCourse">
      	<h3>Add Course</h3>
      	<form onSubmit={this.handleSubmit.bind(this)}>
      		<div>
      			<label>Title</label> <br />
      			<input type="text" ref="title" />
      		</div> 
      		<br />
      		<div>
      			<label>Categroy</label> <br />
      			<select ref="category">
      				{categoryOptions}
      			</select>
      		</div>
      		<br />
      		<input type="submit" value="Submit" />
      	</form>
      </div>
    );
  }
}

export default AddCourse;