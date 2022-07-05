import { useReducer } from "react";
import React from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    // case "DOUBLE_DECREMENT":
    //   return { count: state.count * 2 };
    // case "RESET":
    //   return { count: 0 };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter</h1>
      <h1>カウント:{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        -
      </button>
      {/* <button onClick={() => dispatch("DOUBLE_DECREMENT")}>++</button>
      <button onClick={() => dispatch("RESET")}>RESET</button> */}
    </div>
  );
};
