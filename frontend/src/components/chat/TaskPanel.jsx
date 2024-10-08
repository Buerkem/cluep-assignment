import React from 'react';

const TaskButton = () => (
  <button
    className="task-button text-gray-500 border-gray-300 bg-transparent rounded-2xl border w-[149px] h-[40px] transform transition-transform duration-300 hover:-translate-y-1 hover:text-black hover:border-black"
  >
    Task
  </button>
);

const TaskPanel = () => {
  return (
    <div className="flex justify-start pt-3 col-span-2 scrollbar-hidden">
      <div className="flex space-x-2">
        <TaskButton />
        <TaskButton />
        <TaskButton />
        <TaskButton />
      </div>
    </div>
  );
};

export default TaskPanel;
