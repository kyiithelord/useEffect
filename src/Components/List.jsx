import React from "react";

const List = ({ course: { id, title, fee, studentCount } }) => {
  return (
    <div className="bg-gray-300 border-2 flex">
      <div className="">
        <p className="p-3 mb-3">
          {title} ({fee})
        </p>
      </div>
    </div>
  );
};

export default List;
