import React from "react";
import { useState } from "react";
import "./ListItem.css";

const ListItem = ({ item, deleteItem, editText }) => {
  const [listText, setListText] = useState(item.data);
  const [checked, setChecked] = useState(false);
  const listStyle = {
    width: "60%",
  };

  const onDelete = () => {
    deleteItem(item);
  };
  return (
    <div
      className="text-light text-center my-2 row d-flex flex-row justify-content-center mx-auto"
      style={listStyle}
    >
      <div
        className="col-9 py-2 listText"
        style={
          !checked
            ? { textDecoration: "none" }
            : { textDecoration: "line-through red" }
        }
        onClick={() => {
          let newText = prompt("", listText);
          if (newText !== null) {
            setListText(newText);
          } else {
            setListText(listText);
          }
        }}
      >
        {listText}
      </div>
      <div className="form-check col-1">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckDefault"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault"></label>
      </div>
      <div className="col-2">
        <button
          className="btn btn-sm btn-outline-danger fw-bold"
          onClick={onDelete}
        >
          X
        </button>
      </div>
      <hr />
    </div>
  );
};

export default ListItem;
