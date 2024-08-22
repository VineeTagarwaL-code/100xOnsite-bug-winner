//@ts-nocheck
"use client";

import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
}
