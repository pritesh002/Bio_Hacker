// src/App.js

import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [isSignupPage, setIsSignupPage] = useState(true);

  const handlePageChange = () => {
    setIsSignupPage(!isSignupPage);
  };

  return (
    <div>
      {isSignupPage ? <Signup /> : <Login />}
      <button onClick={handlePageChange}>
        {isSignupPage ? "Go to Login" : "Go to Signup"}
      </button>
    </div>
  );
}

export default App;
