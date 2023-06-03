import React, { Component } from "react";
import "../styles/main.css";
// import "../styles/input.text.css";

import Contact from "./Contact";
import Education from "./Education";

class App extends Component {
  render() {
    return (
      <>
        {/* make side bar */}
        <Contact />
        <Education />

        {/* main page */}
      </>
    );
  }
}

export default App;
