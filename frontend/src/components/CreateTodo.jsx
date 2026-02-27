import { useState } from "react";
import api from "../api/api";

function CreateTodo({todos, setTodos}) {
    const [todoDescription, setTodoDescription] = useState("");
    const [error, setError] = useState([]);

    const handleCreateTodoSubmit = async (e) => {
        try {
            const response = await api.post('/todo', {
                title: todoDescription,
                completed: false
            });
            console.log(response.data);
            setTodos([...todos, response.data]);
            setError('');
            setTodoDescription('');
        } catch (error) {
            // console.log(error);
            // console.log(error.message);
            // console.log(error.response.data);
            setError(Object.values(error.response.data));
        }
    };
    
    return (
    <div className="flex justify-center bg-gray-100 py-10">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
            
            <h2 className="text-2xl font-bold text-gray-800 text-center">
            Create Todo
            </h2>

            <div className="space-y-2">
            <input
                type="text"
                value={todoDescription}
                placeholder="Enter description"
                onChange={(e) => setTodoDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 
                        focus:border-transparent transition duration-200"
            />
            </div>

            <button
            onClick={handleCreateTodoSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 
                        text-white font-semibold py-3 
                        rounded-xl shadow-md 
                        transition duration-200 
                        active:scale-95"
            >
            Create Todo
            </button>

            {error.length != 0 && (
            <p className="text-red-500 text-sm text-center font-medium">
                Error: {error.join(', ')}
            </p>
            )}

        </div>
    </div>
    );
}

export default CreateTodo;