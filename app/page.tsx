'use client';

import { useState, useEffect } from 'react';
import TodoList from './components/todoList';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center flex-col">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-orange text-white rounded-full"
      >
        {darkMode ? (
          <FiSun size={24} />
        ) : (
          <FiMoon size={24} />
        )}
      </button>
      <TodoList />
    </div>
  );
}
