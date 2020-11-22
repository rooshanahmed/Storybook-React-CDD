import React from "react";
import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
};

export const btnLg = () => (
  <Button
    value={"Large Button"}
    style={{ padding: "10px 100px", backgroundColor: "blue", borderRadius: "20px", boxShadow: 'none' }}
    onClick={() => alert("Clicked!!")}
  />
);

export const btnMed = () => (
  <Button
    value={"Medium Button"}
    style={{ padding: "10px 50px", backgroundColor: "darkcyan" }}
    onClick={() => alert("Clicked!!")}
  />
);

export const btnSmall = () => (
  <Button
    value={"Small"}
    style={{ padding: "10px 20px", backgroundColor: "darkgrey" }}
    onClick={() => alert("Clicked!!")}
  />
);
