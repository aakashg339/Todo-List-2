import { useEffect, useState } from 'react';
import './App.css'
import CreateTodo from './components/CreateTodo'
import api from './api/api';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await api.get('/todos');
      // console.log("Fetch todo response : ", response);
      // console.log("Todos from response : ", response.data.todos);
      setTodos([...response.data.todos]);
      // console.log("todos : ", todos);
    };

    fetchTodos();
  }, []);

  const handleCreate = async (title) => {
    const response = await api.post('/todo', {
        title,
        completed: false
    });
    setTodos([...todos, response.data]);
  };

  const handleDelete = async (id) => {
    const response = await api.delete(`/todo/${id}`);
    setTodos(todos.filter((todo) => todo.id != id));
    return response;
  };

  const handleUpdate = async (id, updateData) => {
    const response = await api.put(`/todo/${id}`,updateData);
    const filteredTodos = todos.filter((todo) => todo.id != id);
    setTodos([...filteredTodos, response.data]);
    return response;
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
