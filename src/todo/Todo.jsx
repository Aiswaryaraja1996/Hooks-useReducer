import React, { useState, useReducer } from "react";
import { initialState } from "./Reducer";
import Reducer from "./Reducer";

const InputText = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleInput = (e) => {
    if (text === "") return;
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.random(),
        text,
      },
    });
    setText("");
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add todo..."
      />

      <button onClick={handleInput}>ADD</button>

      {Object.keys(state.todos).length === 0 ? (
        <p>Todo empty !!</p>
      ) : (
        state.todos.map((item) => (
          <div key={item.id}>
            <p style={{ marginRight: 20 }}>{item.text}</p>
          </div>
        ))
      )}
    </>
  );
};

export default InputText;
