import React from "react";
import "./style.css";

function Navbar() {
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" > Clicky Game <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" > Click an Image to Begin </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" > Score: </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" > Top Score: </a>
      </li>
    </ul>
   
  </div>
</nav>
  );
}


export default Navbar;