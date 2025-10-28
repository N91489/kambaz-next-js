"use client";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

interface Todo {
  id: string;
  title: string;
}

interface RootState {
  todosReducer: {
    todos: Todo[];
    todo: Todo;
  };
}

export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group w-50">
        <TodoForm />
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
