//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// Inject list items as js
const listItems = ["Milk", "Eggs", "Chicken"];

// add a class to turn h1 elem red
ReactDOM.render(
  <div>
    <h1 className="red-heading">My List</h1>
    <ul>
      <li>{listItems[0]}</li>
      <li>{listItems[1]}</li>
      <li>{listItems[2]}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
