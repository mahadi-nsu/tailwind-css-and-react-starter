import React from "react";
import Card from "./components/Card";
import "./App.css";

// bg-red-500 hover:bg-blue-700
// text-white font-bold py-2 px-4 rounded

const App = () => {
  return (
    <div className="p-10">
      <div className="max-w-sm shadow-lg p-5 max-w-sm rounded overflow-hidden">
        <h3>Mahadi Hassan</h3>
        <h4>Software Engineer</h4>
        <h5>Spekter Gmbh</h5>
        <div className="flex flex-row justify-around py-5	">
          <button className="bg-green-500 px-5 py-2 rounded">Details</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default App;
