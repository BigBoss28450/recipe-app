import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { APP_KEY } from "./App_Env";

function App() {
  const APP_ID = "d5b6156e";

  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>{APP_KEY}</h1>
    </div>
  );
}

export default App;
