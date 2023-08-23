import React, {useEffect} from 'react';
import Form from "./Form";
import TodoList from "./TodoList";
const Manage = ({
    todos, setTodos,inputText,
    setInputText, status, setStatus, showPopup,
    setShowPopup, selectedButton, setSelectedButton,
    dailyTasks, setDailyTasks}) => {
  return (
    <div>
        <Form 
        inputText={inputText}
        todos = {todos}
        setTodos = {setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        dailyTasks={dailyTasks}
        setDailyTasks={setDailyTasks}
        />
    </div>
  );
}
export default Manage;