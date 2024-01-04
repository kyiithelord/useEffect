import React, { useEffect, useState } from "react";
import Counter from "./Components/Counter";
import HideShow from "./Components/Hideshow";
import ListGroup from "./Components/ListGroup";

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:5173/api/courses")
    //   .then((res) => res.json())
    //   .then((json) => setCourses(json));
    fetchCourses();
  }, []);

  // Async Method
  const fetchCourses = async () => {
    const res = await fetch("http://localhost:5173/api/courses");
    const json = await res.json();
    setCourses(json);
  };
  return (
    <div>
      {/* <Counter /> */}
      {/* <HideShow /> */}
      <ListGroup courses={courses} />
    </div>
  );
}

export default App;
