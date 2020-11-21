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
