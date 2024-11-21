import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo, setTodoValue, todoValue } = props;
  return (
    <>
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter Todo ......"
        />
        <button
          onClick={() => {
            handleAddTodo(todoValue);
            setTodoValue("");
          }}
        >
          Add
        </button>
      </header>
    </>
  );
}
