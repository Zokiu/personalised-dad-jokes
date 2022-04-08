import React from "react";

const InputForm = ({ setRequest }) => {
  const handleSumbit = (event) => {
    event.preventDefault();

    setRequest({
      firstName: event.target.fistName.value,
      lastName: event.target.lastName.value,
      categories: event.target.category.value,
    });

    event.target.fistName.value = null;
    event.target.lastName.value = null;
  };

  const divStyle = {
    display: "flex",
    alignItems: "baseline",
    flexDirection: "column",
  };

  return (
    <div>
      <p>inputForm</p>
      <form onSubmit={handleSumbit} style={divStyle}>
        Your first name:
        <input id="fistName"></input>
        your last name:
        <input id="lastName"></input>
        <select id="category">
          <option>nerdy</option>
          <option>explicit</option>
          <option>chuck norris</option>
          <option>bruce schneier</option>
        </select>
        <button>Set first name and last name and category </button>
      </form>
    </div>
  );
};

export default InputForm;
