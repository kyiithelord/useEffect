import React, { useEffect, useState } from "react";

function Content() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    //Effect Body
    console.log("Mounted");
    const runner = setInterval(() => {
      console.log("Random", Math.random().toFixed(2));
    }, 3000);

    //fetching data when mounted

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    return () => {
      //Clean Up Function
      console.log("Unmounte");
      //we need to remove the runner Interval when content is Unmounted
      clearInterval(runner);
    };
  }, [count]);

  return (
    <div className="mt-4 p-4 bg-gray-200">
      <p className="text-lg">This content is visible when not hidden.</p>
      <div className="flex justify-center items-center mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={decrement}
        >
          -
        </button>
        <span className="bg-gray-200 py-2 px-4">{count}</span>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Content;
