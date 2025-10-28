"use client";
import { useState } from "react";
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

export default function ArrayStateVariable() {
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);
  const { todos } = useSelector((state: RootState) => state.todosReducer);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success mb-2">
        Add Element
      </button>
      <ul className="list-group w-50">
        {array.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              onClick={() => deleteElement(index)}
              className="btn btn-danger btn-sm"
              id="wd-delete-element-click"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="mt-3">Todos from Redux</h3>
      <ul className="list-group w-50">
        {todos.map((todo: Todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
