import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import Title from "./components/Title";

function App() {
  let listArray;
  if (localStorage.getItem("todoList") === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(localStorage.getItem("todoList"));
  }
  const [todoList, setTodoList] = useState(listArray);

  const addItem = (data) => {
    let id;
    if (todoList.length === 0) {
      id = 1;
    } else {
      id = todoList[todoList.length - 1].id + 1;
    }
    const newItem = {
      id: id,
      data: data,
    };
    setTodoList([...todoList, newItem]);

    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  const onDelete = (item) => {
    setTodoList(
      todoList.filter((e) => {
        return e !== item;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <Title />
      <Form addItem={addItem} />
      <ListContainer todoList={todoList} onDelete={onDelete} />
    </div>
  );
}

export default App;
