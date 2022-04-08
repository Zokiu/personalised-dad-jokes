import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DadJokeApi = ({ request }) => {
  const [joke, setJoke] = useState([]);
  let { firstName, lastName, categories } = request;

  useEffect(() => {
    axios
      .get(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo${categories}`)
      .then((response) => {
        console.log(response.data.value.joke);
        setJoke(response.data.value.joke);
      });
  }, []);

  return (
    <div>
      <p>blah</p>
      <p>{joke}</p>
    </div>
  );
};

export default DadJokeApi;
