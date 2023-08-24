import React, {useState} from "react";
import "./App.css";
import Today from "./components/Today";
import Manage from "./components/Manage";
import Header from "./components/Header";
import Active from "./components/Active";
import Completed from "./components/Completed";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dailyTasks, setDailyTasks] = useState([[],[],[],[]]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [strike, setStrike] = useState(0);

  return (
    <div className="App">
    <Router>
      <div>
        <div>
        <Header />
        </div>
        <div>{strike}</div>
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

      </Routes>

      </div>
    </Router>
    </div>
  );

}

export default App;
