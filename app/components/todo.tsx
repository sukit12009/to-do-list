'use client';

import { FiCheck, FiTrash, FiRotateCw } from 'react-icons/fi';

interface TodoProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="dark:border-white  flex items-center justify-between p-4 border-b border-black space-x-2">
      <div
        className={`w-3/4 text-lg max-w-full break-words ${todo.completed ? 'line-through text-orange' : 'text-black dark:text-white '} flex-grow`}
      >
        {todo.text}
      </div>
      <div className="flex justify-end space-x-2 shrink-0 w-1/4" >
        <button
          className="text-orange dark:hover:text-white hover:text-black"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? <FiRotateCw size={20} /> : <FiCheck size={20} />}
        </button>
        <button
          className="dark:text-white dark:hover:text-red-600 text-black hover:text-red-600"
          onClick={() => deleteTodo(todo.id)}
        >
          <FiTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
