import React from "react";
import { useEffect } from "react";
import axios from "axios";

const DadJokeApi = ({ request, setJoke }) => {
  // let { firstName, lastName, categories } = request;

  useEffect(() => {
    axios
      .get(
        `https://api.icndb.com/jokes/random?firstName=${request.firstName}&lastName=${request.lastName}&limitTo${request.categories}`
      )
      .then((response) => {
        console.log(`CLG inside useEffect:  ${response.data.value.joke}`);

        setJoke((prev) => [...prev, response.data.value.joke]);
      });
  }, [request, setJoke]);

  return <div></div>;
};

export default DadJokeApi;
