'use client';

import { useState, useEffect } from 'react';
import Todo from './todo';
import { FiPlus } from 'react-icons/fi';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (!input.trim()) return;
        const newTodo: TodoItem = {
            id: Date.now(),
            text: input.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const toggleComplete = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-white border border-black rounded shadow dark:bg-black dark:text-black dark:border-white">
            <h1 className="text-2xl font-bold text-center text-orange mb-4">
                To-Do List
            </h1>
            <div className="flex flex-col sm:flex-row mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-2 border border-black rounded"
                    placeholder="Add a new task"
                />
                <button
                    onClick={addTodo}
                    className="mt-2 sm:mt-0 sm:ml-2 bg-orange text-white px-4 py-2 rounded flex items-center justify-center"
                >
                    <FiPlus size={20} />
                </button>
            </div>

            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
