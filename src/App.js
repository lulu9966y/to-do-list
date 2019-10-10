import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
// import uuid from "uuid";
import About from "./pages/About";
import axios from "axios";

export class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Take out the trash",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "Dinner with wife",
      //   completed: true
      // },
      // {
      //   id: 3,
      //   title: "Meeting with boss",
      //   completed: false
      // }
    ]
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        this.setState({ todos: res.data });
      });
  }

  addTodo = title => {
    // console.log(title);
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // };
    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // });
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(res => {
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    // this.setState({
    //   todos: [
    //     ...this.state.todos.filter(todo => {
    //       return todo.id !== id;
    //     })
    //   ]
    // });
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: this.state.todos.filter(todo => {
            return todo.id !== id;
          })
        });
      });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <React.Fragment>
                    <AddToDo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      handleChange={this.handleChange}
                      handleClick={this.delTodo}
                    />
                  </React.Fragment>
                );
              }}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
