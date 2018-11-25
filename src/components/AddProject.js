import React, { Component } from 'react';

class AddProject extends Component {

	constructor(){
		super();

		this.state = {
			newProject : {}
		}
	}

	static defaultProps = {
		categories : ['Web Development','API Development','Mobile App Development']
	}

	handleSubmit(e){
 
		// this.setState({},function(){
		// SYNTAX
		// });

			if(this.refs.title.value === ''){
				alert('Value of title is required...');
			}else{
				this.setState({
					newProject : {
					// Add ID
					title : this.refs.title.value,
					category : this.refs.category.value
				}},
				function(){
					// console.log(this.state);
					this.props.addProject(this.state.newProject);
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
      <div className="AddProject">
      	<h3>Add Project</h3>
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

export default AddProject;