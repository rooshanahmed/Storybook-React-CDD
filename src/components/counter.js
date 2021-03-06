import React, { useState } from "react";
import Text from "./text";
import Button from "./button";
import "./counter.css";

const Counter = ({ initialValue = 0 }) => {
  let [count, setCount] = useState(initialValue);

  return (
    <div>
      <Text
        value={"Counter App"}
        style={{ fontSize: "24px", fontWeight: "bold" }}
      />
      <Text
        value={`Value of counter is ${count}`}
        style={{ fontSize: "20px" }}
      />
      <Button
        value={"Increament"}
        onClick={() => setCount(count++)}
        className="btn-inc"
      />
      <Button
        value={"Decreament"}
        onClick={() => setCount(count--)}
        className="btn-dec"
      />
    </div>
  );
};
export default Counter;
