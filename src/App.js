import React, { Component } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/css/App.css";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import Courses from "./components/Courses";
import AddCourse from "./components/AddCourse";
import TestOne from "./components/TestOne";
import Calculator from "./components/Calculator";
import Add from "./components/Add";
import Sub from "./components/Sub";
import Mul from "./components/Mul";
import Div from "./components/Div";
import Mod from "./components/Mod";




class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      courses: []
    };
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: 1,
          title: "Build a website with Php",
          category: "Web Development"
        },
        {
          id: 2,
          title: "Build a REST API with Node.js",
          category: "API Development"
        },
        {
          id: 3,
          title: "Build a Mobile App with React Native",
          category: "Mobile App Development"
        }
      ]
    });
  }

  getCourses() {
    this.setState({
      courses: [
        {
          id: 1,
          title: "Learn Technology",
          category: "Technology"
        },
        {
          id: 2,
          title: "Learn Science",
          category: "Scientific"
        },
        {
          id: 3,
          title: "Learn Medical Science",
          category: "Medical"
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getCourses();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }

  handleAddCourse(course) {
    let courses = this.state.courses;
    courses.push(course);
    this.setState({
      courses: courses
    });
  }

  handleDeleteCourse(id) {
    let courses = this.state.courses;
    let index = courses.findIndex(x => x.id === id);
    courses.splice(index, 1);
    this.setState({
      courses: courses
    });
  }

  handleSubmit(name) {
    alert("Hello " + name);
  }

  // <div className="ProjectApp">
  //       <AddProject addProject={this.handleAddProject.bind(this)} /> <br /><hr />
  //       <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
  //     </div>
  //     <hr />
  //     <div className="CourseApp">
  //       <AddCourse addCourse={this.handleAddCourse.bind(this)} /> <br /><hr />
  //       <Courses courses={this.state.courses} onDelete={this.handleDeleteCourse.bind(this)} />
  //     </div>
  //     <hr />
  //     <div>
  //       <TestOne test="testone" setName={this.handleSubmit.bind(this)} />
  //     </div>

  render() {
    return (
       <Router>
         <div className="container">
         <div>
          <Route exact path="/" component={ Calculator }/>
         </div>
         <div>
          <Route exact path="/add" component={ Add }/>
         </div>
         <div>
          <Route exact path="/sub" component={ Sub }/>
         </div>
         <div>
          <Route exact path="/mul" component={ Mul }/>
         </div>
         <div>
          <Route exact path="/div" component={ Div }/>
         </div>
         <div>
          <Route exact path="/mod" component={ Mod }/>
         </div>
        </div>
      </Router>
      )
  }
}

export default App;
