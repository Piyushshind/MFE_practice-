import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Hello from "./Hello";
import Demo from "remote/Demo";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <Counter />
    <Hello />
    <Demo />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
