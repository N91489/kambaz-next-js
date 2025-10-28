"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";

interface RootState {
  addReducer: {
    sum: number;
  };
}

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: RootState) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25" id="wd-add-redux">
      <h2>Add Redux</h2>
      <h3>
        {a} + {b} = {sum}
      </h3>
      <input
        className="form-control mb-2"
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        className="form-control mb-2"
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <button
        onClick={() => dispatch(add({ a, b }))}
        className="btn btn-primary"
        id="wd-add-redux-click"
      >
        Add Redux
      </button>
      <hr />
    </div>
  );
}
