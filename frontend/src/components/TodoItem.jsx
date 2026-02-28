import { MdDone, MdPending } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";

function TodoItem({todo, handleUpdate, handleDelete}) {
    const [error, setError] = useState('');
    const [showUpdateSection, setShowUpdateSection] = useState(false);
    const [updatedTodoTitle, setUpdatedTodoTitle] = useState(todo.title);
    const [updatedCompletionStatus, setUpdatedCompletionStatus] = useState(todo.completed);

    const handleUpdateTodoButtonClick = async () => {
        try {
            const updatedTodoData = {
                id: todo.id,
                title: updatedTodoTitle,
                completed: updatedCompletionStatus
            };
            await handleUpdate(todo.id, updatedTodoData);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleUpdateTodoIconClick = () => {
        setShowUpdateSection(!showUpdateSection);
        setError('');
    };

    const handleDeleteTodoIconClick = async () => {
        try {
            await handleDelete(todo.id);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <p className="text-gray-800 font-medium text-lg">
                    {todo.title}
                </p>
                <div className="flex items-center space-x-4 text-xl">
                    {todo.completed ? <MdDone className="text-green-500" /> : <MdPending className="text-yellow-500" />}
                    <button className="text-blue-500 hover:text-blue-700 transition"
                        onClick={handleUpdateTodoIconClick}>
                        <RxUpdate />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition"
                        onClick={handleDeleteTodoIconClick}>
                        <RiDeleteBinLine />
                    </button>
                </div>
            </div>
            
            {
                showUpdateSection && (
                    <div className="px-5 py-4 bg-gray-50 space-y-4">
                        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition"
                            type="text"
                            value={updatedTodoTitle}
                            onChange={(e) => setUpdatedTodoTitle(e.target.value)}
                            placeholder="Enter data to update"
                        />
                        <div className="flex items-center space-x-2">
                            <input type="checkbox"
                                checked={updatedCompletionStatus}
                                onChange={(e) => setUpdatedCompletionStatus(e.target.checked)}
                            />
                            <label>
                                {updatedCompletionStatus ? "Completed" : "Not Completed"}
                            </label>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white 
             font-semibold py-2 rounded-lg shadow 
             transition active:scale-95"
                            onClick={handleUpdateTodoButtonClick}>
                            Update todo
                        </button>
                    </div>
                )
            }
            
            {error && (
                <p className="text-red-500 text-sm text-center font-medium">
                    Error: {error}
                </p>
            )}
        </div>
    );
}

export default TodoItem;