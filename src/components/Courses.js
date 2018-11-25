import React, { Component } from 'react';
import CourseItem from './CourseItem';

class Courses extends Component {

	deleteCourse(id){
		this.props.onDelete(id);
	}

  render() {
  	let courseItems;
	if(this.props.courses){
		courseItems = this.props.courses.map(course => {
			return(
					<CourseItem onDelete={this.deleteCourse.bind(this)} key={course.title} course={course} />
				)
			})
	}

    return (
      <div className="Courses">
      	<h3>Latest Courses</h3>
        {courseItems}
      </div>
    );
  }
}

export default Courses;