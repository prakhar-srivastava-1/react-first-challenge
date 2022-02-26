//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

// Import the newly created App component
import App from "./components/App.jsx";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// add a class to turn h1 elem red
// turn on contentEditable and off spellCheck
ReactDOM.render(<App />, document.getElementById("root"));
