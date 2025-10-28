"use client";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

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

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex gap-2">
      <button
        onClick={() => dispatch(addTodo(todo))}
        className="btn btn-success"
        id="wd-add-todo-click"
      >
        Add
      </button>
      <button
        onClick={() => dispatch(updateTodo(todo))}
        className="btn btn-warning"
        id="wd-update-todo-click"
      >
        Update
      </button>
      <input
        className="form-control"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
