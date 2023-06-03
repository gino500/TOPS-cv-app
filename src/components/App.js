import React, { Component } from "react";
import "../styles/main.css";
import "../styles/input.text.css";
import Contact from "./Contact";
import Education from "./Education";
import Work from "./Work";

class App extends Component {
  render() {
    return (
      <>
        <Contact />
        <Education />
        <Work />
      </>
    );
  }
}

export default App;
