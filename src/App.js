import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './todo/Todo';
import axios from "axios";

function App() {

  const [todoTask, settodoTask] = useState("");
  const [todos, settodos] = useState([]);

  axios.post("http://localhost:8000/Todo-Tasks", {
    tasks: todos,
  });


  return (
    <div className="App">

      <Todo todos={todos} settodos={settodos} todoTask={todoTask} settodoTask={settodoTask} />

    </div>
  );
}

export default App;
