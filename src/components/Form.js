import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = ({ addItem }) => {
  const [data, setData] = useState("");
  const submitItem = (e) => {
    e.preventDefault();
    if (data === "") {
      alert("Add some text to save");
    } else {
      addItem(data);
      setData("");
    }
  };
  return (
    <div className="container">
      <form className="mx-auto" onSubmit={submitItem}>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control inputField"
            aria-describedby="button-addon2"
            value={data}
            onChange={(event) => {
              setData(event.target.value);
            }}
          />
          <button
            className="btn btn-outline-warning"
            type="submit"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
