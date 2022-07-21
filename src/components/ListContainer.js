import React from "react";
import ListItem from "./ListItem";

const ListContainer = ({ todoList, onDelete }) => {
  return (
    <div className="text-secondary text-center">
      {todoList.length === 0
        ? "Add something to list"
        : todoList.map((item) => {
            return <ListItem item={item} key={item.id} deleteItem={onDelete} />;
          })}
    </div>
  );
};

export default ListContainer;
