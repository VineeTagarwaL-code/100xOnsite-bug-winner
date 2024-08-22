import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
