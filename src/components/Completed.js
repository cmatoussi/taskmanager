import React, { useState } from 'react';

const Completed = ({ todos }) => {
  const [completed, setCompleted] = useState(todos.filter(todo => todo.completed === true));

  return (
    <div>
      <ul>
        {completed.map((task, index) => (
          <h2 key={index}>
            <li>{task.text}</li>
          </h2>
        ))}
      </ul>
    </div>
  );
};

export default Completed;



