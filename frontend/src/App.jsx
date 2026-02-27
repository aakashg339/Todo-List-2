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

  return (
    <div className='min-h-screen bg-gray-100 py-10'>
      <div className='max-w-4xl mx-auto space-y-8 px-4'>
        <CreateTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
