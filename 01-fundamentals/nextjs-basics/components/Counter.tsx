"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState(false)
  return (
    <div className="p-2 mt-4">
      <button 
      onClick={() => {
        setCounter((prev) => prev + 1)
        setStatus(true)
      }}
      className="cursor-pointer p-2 border-1 rounded-md border-amber-50"
      >Increase</button>

      <p>The number is {counter}</p>
      {status && <p>Button is clicked</p>}
    </div>
  );
};

export default Counter;
