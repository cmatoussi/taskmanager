import React from "react";
import { IoIosOptions} from "react-icons/io";

const Todo = ({text, todo, todos, setTodos, showPopup, setShowPopup, selectedButton, setSelectedButton, dailyTasks,
    setDailyTasks}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
               return {
                ...item, completed: !item.completed
               };
            }
               return item;
        })
        );
    };
    const togglePopup = () => {
        setShowPopup(!showPopup);
      };
    
      const handleButtonSelect = (buttonValue) => {
        setSelectedButton(buttonValue);
      };
      const handleSubmit = () => {
        const newDailyTasks = dailyTasks
        switch (selectedButton) {
            case "button1":
                newDailyTasks[0].push(todo)
                setDailyTasks(newDailyTasks)
                break;
            case "button2":
                newDailyTasks[1].push(todo)
                setDailyTasks(newDailyTasks)
                break;
            case "button3":
                newDailyTasks[2].push(todo)
                setDailyTasks(newDailyTasks)
                break;              
            default:
              break;
          }
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
            <IoIosOptions size= "40px" onClick={togglePopup}/>
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
                    <button onClick={handleSubmit}>submit</button>
                    </div>

                )}
        </div>
    );
};
export default Todo;