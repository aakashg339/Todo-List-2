import { useState } from "react";

function CreateTodo({handleCreate}) {
    const [todoTitle, setTodoTitle] = useState("");
    const [error, setError] = useState('');

    const handleCreateTodoSubmit = async () => {
        try {
            await handleCreate(todoTitle);
            setError('');
            setTodoTitle('');
        } catch (error) {
            setError(error.message);
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
                value={todoTitle}
                placeholder="Enter description"
                onChange={(e) => setTodoTitle(e.target.value)}
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

            {error && (
            <p className="text-red-500 text-sm text-center font-medium">
                Error: {error}
            </p>
            )}

        </div>
    </div>
    );
}

export default CreateTodo;