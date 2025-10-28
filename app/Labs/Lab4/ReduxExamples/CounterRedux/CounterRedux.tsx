"use client";

export const dynamic = "force-dynamic";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

interface RootState {
  counterReducer: {
    count: number;
  };
}

export default function CounterRedux() {
  const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button
        onClick={() => dispatch(increment())}
        className="btn btn-success me-2"
        id="wd-counter-redux-increment-click"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="btn btn-danger"
        id="wd-counter-redux-decrement-click"
      >
        Decrement
      </button>
      <hr />
    </div>
  );
}
