// Task.js
import React, { useState } from 'react';

function Task() {
  const [taskCount, setTaskCount] = useState(0);

  // Function to increase task count
  const increaseTaskCount = () => {
    console.log('increaseTaskCount called');
    setTaskCount(taskCount + 1);
  };
  

  return (
    <div>
      <h1>Task</h1>
      <p>Task Count: {taskCount}</p>
      {/* You can use the task count as needed in this component */}
    </div>
  );
}

export default Task;
