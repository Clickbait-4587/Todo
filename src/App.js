import React, { Component } from "react";
import Todos from "./Todos";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Eat" },
      { id: 2, content: "Code" },
      { id: 3, content: "Code some more" },
      { id: 4, content: "Sleep" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return id !== todo.id;
    });

    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="App container">
        <h3 className="center">Todos</h3>
        <div className="top-right-rad">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}
export default App;
