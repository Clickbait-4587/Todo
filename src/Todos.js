import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  let todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="todo collection-item" key={todo.id}>
          <span>
            {todo.content}
            <i
              className="right material-icons delete"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              delete
            </i>
          </span>
        </div>
      );
    })
  ) : (
    <div className="todo collection-item">
      <p className="flow-text center">You have no todos left. Yeepee!</p>
      <p></p>
    </div>
  );
  return <div className="collection todos">{todoList}</div>;
};

export default Todos;
