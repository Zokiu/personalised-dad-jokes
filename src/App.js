import { useState } from "react";
import InputForm from "./componenets/InputForm";
import DadJokeApi from "./componenets/DadJokeApi";
import AllJokes from "./componenets/AllJokes";

function App() {
  const [joke, setJoke] = useState([]);
  const [request, setRequest] = useState({
    firstName: "",
    lastName: "",
    categories: "",
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter your first name and last name:</p>
      </header>
      <InputForm setRequest={setRequest} />
      {request.firstName === "" ? (
        <p>awaiting for user input</p>
      ) : (
        <DadJokeApi request={request} joke={joke} setJoke={setJoke} />
      )}

      {joke?.[0] ? <AllJokes joke={joke} /> : "awaiting for API response"}
    </div>
  );
}

export default App;
