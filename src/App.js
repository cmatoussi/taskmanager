import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure to import Routes
import "./App.css";
import Today from "./components/Today";
import Manage from "./components/Manage";
import Header from "./components/Header";
import Active from "./components/Active";
import Completed from "./components/Completed";
import Stats from "./components/Stats";
import RedirectToManage from "./components/RedirectToManage";
function App() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);

  const [inputText, setInputText] = useState("");
  const [dailyTasks, setDailyTasks] = useState([[],[],[],[]]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [strike, setStrike] = useState(0);

  useEffect(() => {
    // To save data to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <Router>
    <div className="App">
      <div>
        <div>
        <Header 
        strike={strike}
        />
        </div>
        <div className="page-content">
        <div className="stats-wrapper">
          <Stats
            strike={strike}
            todos={todos}
          />
        </div>
        <Routes>
        <Route path="/today" element={
        <Today
        dailyTasks={dailyTasks}
        setDailyTasks={setDailyTasks}
        todos={todos}
        setTodos={setTodos}
        strike={strike}
        setStrike={setStrike}
        />
        } />
        <Route path="/manage" element={
        <Manage 
         todos = {todos}
         setTodos = {setTodos}
         inputText={inputText}
         setInputText={setInputText}
         selectedButton={selectedButton}
         setSelectedButton={setSelectedButton}
         dailyTasks={dailyTasks}
         setDailyTasks={setDailyTasks}
        />}
        />
        <Route path="/active" element={
        <Active 
        todos={todos}
        />
        } />
        <Route path="/completed" element={
        <Completed
        todos={todos}
        />
        }/>
        <Route path="/" element={<RedirectToManage />} />

      </Routes>
    </div>
    </div>
    </div>
    </Router>
  );

}

export default App;
