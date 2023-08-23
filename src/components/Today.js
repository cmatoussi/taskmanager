import React from 'react';

const Today = ({
  dailyTasks, setDailyTasks}) => {
  const name= ["Main Project(3 hours):", "3 Shorter Tasks:", "3 Maintainance Tasks: "];
  const deleteHandler = (i,task) => {
    setDailyTasks(prevDailyTasks => {
      const updatedTasks = [...prevDailyTasks];
      updatedTasks[i] = updatedTasks[i].filter(el => el.id !== task.id);
      return updatedTasks;
    });
};
const completeHandler = () => {}

  return (
    <div className="flex-container">
      <ul className="flex-item">
  {name.map((item, index) => (
    <div key={index}>
      <h2>
        <li>
          {item}
        </li>
      </h2>
      <div className="todo">
      {dailyTasks[index]?.map((task, taskIndex)  => ( 
            <div key={taskIndex} className={`todo-item ${task.completed ? "completed" : ""}`}>
            {task.text}
            <button onClick={completeHandler} className="complete-btn">
              <i className="fas fa-check"></i>
            </button>
            <button onClick= {() => deleteHandler(index,task)} className="trash-btn">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  ))}
</ul>
</div>
  );
}
export default Today;
