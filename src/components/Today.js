import React from 'react';

const Today = ({ dailyTasks, setDailyTasks, todos, setTodos, strike, setStrike }) => {
  const name = ["Main Project (3 hours):", "3 Shorter Tasks:", "3 Maintenance Tasks:", "Additional Tasks:"];

  const deleteHandler = (i, task) => {
    setDailyTasks((dailyTasks) => {
      const updatedTasks = [...dailyTasks];
      updatedTasks[i] = updatedTasks[i].filter((el) => el.id !== task.id);
      return updatedTasks;
    });
  };
  const updateDailies = (index, task) => {
    setDailyTasks((updatedTasks) =>
      updatedTasks.map((taskList, listIndex) =>
        listIndex === index
          ? taskList.map((item) =>
              item.id === task.id ? { ...item, completed: !item.completed } : item
            )
          : taskList
      )
    );
  
    // Update corresponding task in the todos array
    updateTodos(task);
  };
  
  const updateTodos = (task) => {
    if (task) {
      setTodos((prevTodos) =>
        prevTodos.map((item) =>
          item.id === task.id ? { ...item, completed: !item.completed } : item
        )
      );
    }
  };
  

  const updateStrikes = () => {
    const lastStrikeUpdate = localStorage.getItem('lastStrikeUpdate');
    const currentTime = new Date().getTime();
    let completedTaskCount = 0; // Initialize the count
  // Check if all last tasks in main task lists are completed
    for (let i = 0; i < 3; i++) {
      const taskList = dailyTasks[i];
      // Count completed tasks in the current task list
        const completedInList = taskList.filter((item) => item.completed);
        completedTaskCount += completedInList.length;
      }
    // Update strike count if all tasks are completed
    if ((completedTaskCount === 6) && (!lastStrikeUpdate || currentTime - parseInt(lastStrikeUpdate, 10) >= 24 * 60 * 60 * 1000)) {
      setStrike(strike + 1);
       // Update the last strike update timestamp in localStorage
       localStorage.setItem('lastStrikeUpdate', currentTime.toString());
    }
};  
  const completeHandler = (index, task) => {
    //update dailies
    updateDailies(index, task);
    // update todos
    updateTodos(index, task);
  
    updateStrikes();
  };
  




  return (
    <div>
        <h1 style={{marginTop: '2.5%'}}>Welcome To Today's Tasks </h1>
    <div className="flex-container">
      <ul className="flex-item">
        {name.map((item, index) => (
          <div key={index}>
            <h2>
              <li>{item}</li>
            </h2>
            <div className="daily">
              {dailyTasks[index]?.map((task, taskIndex) => (
                <div
                  key={taskIndex}
                  className={`${task.completed ? 'completed' : ''}`}
                > <div className="day">
                    <div className="task-text">{task.text}</div>
                    <button onClick={() => completeHandler(index,task)} className="complete-btn">
                      <i className="fas fa-check"></i>
                    </button>
                    <button onClick={() => deleteHandler(index, task)} className="trash-btn">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Today;
