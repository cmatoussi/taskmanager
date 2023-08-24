import React from 'react';
import Form from "./Form";
import TodoList from "./TodoList";
const Manage = ({
    todos, setTodos,inputText,
    setInputText, selectedButton, setSelectedButton,
    dailyTasks, setDailyTasks}) => {
      const header = todos.length === 0 ? "No Tasks Added Yet" : "Manage My Tasks";

  return (
    <div>
      <h1 style={{marginTop: '2.5%'}}>Add New Tasks</h1>
        <Form 
        inputText={inputText}
        todos = {todos}
        setTodos = {setTodos}
        setInputText={setInputText}
        />
      <h1 style={{marginBottom: '2%'}}>{header}</h1>
      
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        dailyTasks={dailyTasks}
        setDailyTasks={setDailyTasks}
        />
    </div>
  );
}
export default Manage;