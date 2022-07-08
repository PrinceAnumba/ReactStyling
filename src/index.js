//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import reactDom from "react-dom";

var date = new Date(2022, 7, 7, 19);
var hour = date.getHours();
var greet = "";
const header = {
  color: ""
};
// alert(hour)
if (hour < 12) {
  greet = "Good morning";
  header.color = "red";
} else if (hour < 18) {
  greet = "Good afternoon";
  header.color = "green";
} else {
  greet = "Good evening";
  header.color = "blue";
}

reactDom.render(
  <div>
    <h1 className="header" style={header}>
      {greet}
    </h1>
  </div>,
  document.getElementById("root")
);
