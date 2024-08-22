import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-md shadow-sm bg-gray-100">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="mr-2 w-4 h-4 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <label
          className={`${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
