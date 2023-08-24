import React, { useState } from 'react';

const Completed = ({ todos }) => {
  const [active, setActive] = useState(todos.filter(todo => todo.completed === false));

  return (
    <div>
    <h1 style={{marginTop: '2.5%'}}> Your Active Tasks </h1>
    <h3 style={{marginTop: '2.5%'}}> Total Active Tasks : {active.length} </h3>
    <div className="flex-container">
      <ul className="flex-item">
        {active.map((task, index) => (
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