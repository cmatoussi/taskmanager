import React, {useState, useEffect} from 'react';

const Stats = ({ strike, todos}) => {
  const [completed, setCompleted] = useState(0);
  const [active, setActive] = useState(0);
  const [activeRatio, setActiveRatio] = useState(0);
  const [completedRatio, setCompletedRatio] = useState(0);
  useEffect(() => {
    setCompleted(todos.filter(todo => todo.completed));
  }, [todos]);
  useEffect(() => {
    setActive(todos.filter(todo => todo.completed === false));
  }, [todos]);
  useEffect(() => {setActiveRatio(active.length* 100/ (todos.length))});
  useEffect(() => {setCompletedRatio(100-activeRatio)});

  return (
    <div className="stat-content">
      <h2> Your Overall Progress</h2>
      <h4>Consecutive strikes: {strike}</h4>
      <h4>Total completed tasks: {completed.length}</h4>
      <h4>Total active tasks: {active.length}</h4>

      <div className="chart">
        <div
          className="active-bar"
          style={{
            width: `${activeRatio}%`,
          }}
        ></div>
        <div
          className="completed-bar"
          style={{
            width: `${completedRatio}%`,
          }}
        ></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Active: {activeRatio.toFixed(1)}%</div>
        <div>Completed: {completedRatio.toFixed(1)}%</div>
      </div>
    </div>
  );
};

export default Stats;
