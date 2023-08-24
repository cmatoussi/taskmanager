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
   
  }
  const updateTodos = (task) => {
    if (task) {
      setTodos(todos.map(item => {
          if(item.id === task.id){
             return {
              ...item, completed: !item.completed
             };
          }
             return item;
      }));
    }
  }
  const updateStrikes = () => {
    // get strike if all main tasks in a day are finished
    let finished = true; // Assume all items are completed initially
    const minSize = [1, 3, 3];
  
    for (let i = 0; i < 3; i++) {
      const taskList = dailyTasks[i];
      let allCompleted = taskList.every((item) => item.completed);
      console.log(allCompleted);
  
      if (!allCompleted || dailyTasks[i].length < minSize[i]) {
        finished = false;
        break;
      }
    }
    if (finished) {
      setStrike(strike + 1);
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
