import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { MyName } from "./MyName";
import { Card } from "./Card";
import { Props } from "./Props";
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <MyName />
    <Card />
    <Props />
    <Props title="My Blog!" id= { 1 } />
  </React.StrictMode>
);
