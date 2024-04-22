import React, { useState } from "react";

function Body() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleAddToDo = () => {
    if (toDo.trim() !== "") {
      setToDos([...toDos, { text: toDo, status: false, id: Date.now() }]);
      setToDo("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddToDo();
    }
  };

  const handleRemoveTodo = (id) => {
    setToDos(toDos.filter((todo) => id !== todo.id));
  };

  const handleToggleCompletion = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 className="h2">Whoop, Lets To Do</h2>
      </div>
      <div className="input">
        <i className="fas fa-pen"></i>
        <input
          type="text"
          value={toDo}
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          placeholder=" Add item..."
          style={{ marginLeft: "10px" }}
        />
        <i className="fas fa-plus" onClick={handleAddToDo}></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                type="checkbox"
                onChange={() => handleToggleCompletion(obj.id)}
                checked={obj.status}
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>

            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => handleRemoveTodo(obj.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
