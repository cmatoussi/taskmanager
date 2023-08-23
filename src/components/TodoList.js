import React from 'react';
import Todo from "./Todo";
const TodoList = ({ filteredTodos,
     todos,setTodos,
     showPopup, setShowPopup,
     selectedButton, setSelectedButton,
     dailyTasks, setDailyTasks
    }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map((todo)=>(
            <Todo 
                todos={todos}
                setTodos={setTodos} 
                todo={todo} 
                key={todo.id} 
                text={todo.text}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                dailyTasks={dailyTasks}
                setDailyTasks={setDailyTasks}
            />
            ))}
            </ul>
        </div>
    );
};
export default TodoList;