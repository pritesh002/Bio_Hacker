// src/App.js

import React from "react";
import AgricultureUI from "./AgricultureUI"; // Add this line to import the AgricultureUI component

function App() {
  return (
    <div>
      {/* Your JSX code for the main application component */}
      <AgricultureUI />{" "}
      {/* Add this line to add a new route for the AgricultureUI component */}
    </div>
  );
}

export default App;
