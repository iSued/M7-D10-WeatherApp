import React from "react";
import SearchPage from "./components/SearchPage";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div className="allPage">
      <div>
        <div>
          <SearchPage />
        </div>
      </div>
      <div>
        <div>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
