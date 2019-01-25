import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/NavBar';


class App extends Component {

  state = {
    page: 'list'
  };
    handleNavBarClick = newPage => this.setState({page: newPage});

  render() {
    return (
      <div className="App">
        <div className='container'>
          <NavBar selectedPage={this.state.page} />
          {this.state.page === 'list'? <h1>List</h1>: <h1> Add</h1>}
        </div>
      </div>
    );
  }
}

export default App;
