import { useEffect, useState } from 'react';
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos';
import todoService from './service/todoService';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await todoService.getAllTodos();
      setTodos([...response]);
    };

    fetchTodos();
  }, []);

  const handleCreate = async (title) => {
    const newTodo = await todoService.createTodo(title);
    setTodos(prev => [...prev, newTodo]);
  };

  const handleDelete = async (id) => {
    const deletedTodo = await todoService.deleteTodo(id);
    setTodos(prev => prev.filter((todo) => todo.id != id));
    return deletedTodo;
  };

  const handleUpdate = async (id, updateData) => {
    const updatedTodo = await todoService.updateTodo(id, updateData);
    setTodos(prev => prev.map((todo) => todo.id == id ? updatedTodo : todo));
    return updatedTodo;
  };

  return (
    <div className='min-h-screen bg-gray-100 py-10'>
      <div className='max-w-4xl mx-auto space-y-8 px-4'>
        <CreateTodo handleCreate={handleCreate} />
        <Todos todos={todos} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
