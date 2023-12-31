import React, { useState } from 'react';

const Completed = ({ todos }) => {
  const [completed, setCompleted] = useState(todos.filter(todo => todo.completed === true));
  const noCompleted = completed.length === 0 ? "You don't have any completed tasks" : "";


  return (
    <div>
      <h1 style={{marginTop: '2.5%'}}> Your Completed Tasks </h1>
      <h3 style={{marginTop: '2.5%'}}>Total Tasks completed : {completed.length} </h3>
      <div className="flex-container">
        <ul className="flex-item">
          {noCompleted}
          {completed.map((task, index) => (
            <h2 key={index}>
              <li>{task.text}</li>
            </h2>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Completed;



