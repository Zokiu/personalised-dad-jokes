import React from "react";

const AllJokes = ({ joke }) => {
  return (
    <div>
      <p>previous results:</p>
      {joke.map((joke, index) => (
        <div key={index}>
          <p>{joke}</p>
        </div>
      ))}
    </div>
  );
};

export default AllJokes;
