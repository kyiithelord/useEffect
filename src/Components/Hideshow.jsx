import React, { useState } from "react";
import "./HideShow.jsx";
import Content from "./Content.jsx";

const HideShow = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Hide/Show Component</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleVisibility}
      >
        {isHidden ? "Show" : "Hide"}
      </button>

      {!isHidden && <Content />}
    </div>
  );
};

export default HideShow;
