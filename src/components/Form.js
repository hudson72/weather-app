import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        placeholder="Add city name"
        onChange={props.change}
      />
      <button>Find City</button>
    </form>
  );
};

export default Form;
