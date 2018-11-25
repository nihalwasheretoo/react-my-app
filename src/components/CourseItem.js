import React, { Component } from 'react';

class CourseItem extends Component {

	deleteCourse(id){
		this.props.onDelete(id);
	}

  render() {
    return (
      <li className="CourseItem">
        {this.props.course.title} : {this.props.course.category}  <button onClick={this.deleteCourse.bind(this,this.props.course.id)}>X</button>
      </li>
    );
  }
}

export default CourseItem;
