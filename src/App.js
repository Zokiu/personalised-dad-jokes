import { useState } from "react";
import InputForm from "./componenets/InputForm";
import DadJokeApi from "./componenets/DadJokeApi";

function App() {
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
      {request.firstName === "" ? <p>loading</p> : <DadJokeApi request={request} />}
    </div>
  );
}

export default App;
