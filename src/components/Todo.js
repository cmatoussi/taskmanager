import React, {useState} from "react";
import { IoIosOptions} from "react-icons/io";

const Todo = ({text, todo, todos, setTodos, selectedButton, setSelectedButton, dailyTasks,
    setDailyTasks}) => {
    const [todoForPopup, setTodoForPopup]= useState(null);
    const [showPopup, setShowPopup] = useState(false); 
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ));
    };
    const completeHandler = () => {
        if (todo) {
            setTodos(todos.map(item => {
                if(item.id === todo.id){
                   return {
                    ...item, completed: !item.completed
                   };
                }
                   return item;
            }));
        }

        setDailyTasks((updatedTasks) =>
        updatedTasks.map((taskList) =>
            taskList.map((task ) =>{
            if(task.id === todo.id){
              return {
               ...task, completed: !task.completed
              };
           }
              return task;
            }
             )));
    };
    
    const togglePopup = (todo) => {
        setTodoForPopup(todo); // Set the todo for the popup
        setShowPopup(!showPopup);
      };
    
      const handleButtonSelect = (buttonValue) => {
        setSelectedButton(buttonValue);
      };
      const manageDailies = () => {
        let newDailyTasks = [...dailyTasks];
        // add task to daily tasks
        switch (selectedButton) {
          case "button1":
            if (newDailyTasks[0].length === 1) {
              alert("you have already added one project for today");}
            else{
            newDailyTasks[0].push(todoForPopup);}
            break;
          case "button2":
            if (newDailyTasks[1].length === 3) {
              alert("you have already added 3 short tasks for today");
            } else {
            newDailyTasks[1].push(todoForPopup);}
            break;
          case "button3":
            if (newDailyTasks[2].length === 3) {
              alert("you have already added 3 maintenance tasks for today");
            } else {
            newDailyTasks[2].push(todoForPopup);}
            break;
          case "button4":
            newDailyTasks[3].push(todoForPopup);
            break;
          default:
            break;
        }
        setDailyTasks(newDailyTasks);
      }
      const handleSubmit = () => {
        let found = false;
        //avoid duplicates
        dailyTasks.forEach((taskList) => {
          taskList.forEach((item) => {
            if (todo.id === item.id) {
              alert("You have already added this task to your daily tasks.");
              found = true;
            }
          });
        });     
        if (!found){ manageDailies(); }   
        togglePopup();
      };
      
    return (
        <div className = "todo">
            <li className={`todo-item ${todo.completed ? "completed": ""}`}>
            {text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <IoIosOptions size="40px" onClick={() => togglePopup(todo)} />
                {showPopup && (
                    <div className="popup">
                    <p> Add to daily tasks:</p>
                        <li>
                        <label>
                            <input
                            type="radio"
                            name="options"
                            value="button1"
                            checked={selectedButton === "button1"}
                            onChange={() => handleButtonSelect("button1")}
                            />
                            {' priority project (3h)'}
                        </label>
                        </li>
                        <li>
                        <label>
                            <input
                            type="radio"
                            name="options"
                            value="button2"
                            checked={selectedButton === "button2"}
                            onChange={() => handleButtonSelect("button2")}
                            />
                               {' 3 shorter tasks'}
                        </label>
                        </li>
                        <li>
                        <label>
                            <input
                            type="radio"
                            name="options"
                            value="button3"
                            checked={selectedButton === "button3"}
                            onChange={() => handleButtonSelect("button3")}
                            />
                            {' 3 maintainance tasks'}
                        </label>
                        </li>
                        <li>
                        <label>
                            <input
                            type="radio"
                            name="options"
                            value="button4"
                            checked={selectedButton === "button4"}
                            onChange={() => handleButtonSelect("button4")}
                            />
                            {'Additional Tasks'}
                        </label>
                        </li>
                        {todoForPopup && <button className="submit-btn" onClick={handleSubmit}>submit</button>}    
                        </div>
                )}
        </div>
    );
};
export default Todo;