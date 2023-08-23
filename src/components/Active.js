import React, { useState } from 'react';

const Completed = ({ todos }) => {
  const [active, setActive] = useState(todos.filter(todo => todo.completed === false));

  return (
    <div>
      <ul>
        {active.map((task, index) => (
          <h2 key={index}>
            <li>{task.text}</li>
          </h2>
        ))}
      </ul>
    </div>
  );
};

export default Completed;