import React from "react";
import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
};

export const btnLg = () => (
  <Button
    value={"Large Button"}
    style={{ width: "250px", backgroundColor: "blue" }}
    onClick={() => alert("Clicked!!")}
  />
);

export const btnMed = () => (
    <Button
      value={"Medium Button"}
      style={{ width: "150px", backgroundColor: "darkcyan" }}
      onClick={() => alert("Clicked!!")}
    />
);

export const btnSmall = () => (
    <Button
      value={"Small"}
      style={{ width: "80px", backgroundColor: "darkgrey" }}
      onClick={() => alert("Clicked!!")}
    />
);