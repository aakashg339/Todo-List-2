import { MdDone, MdPending } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";

function TodoItem({todo, handleUpdate, handleDelete}) {
    const [error, setError] = useState('');

    const handleUpdateTodoClick = async () => {
        try {
            await handleUpdate(todo.id);
        } catch (error) {
            console.error(error.response.data);
            setError(Object.values(error.response.data));
        }
    };

    const handleDeleteTodoClick = async () => {
        try {
            await handleDelete(todo.id);
        } catch (error) {
            console.error(error.response.data);
            setError(Object.values(error.response.data));
        }
    };

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <p>{todo.title}</p>
            <div className="flex items-center space-x-4 text-xl cursor-pointer">
                {todo.completed ? <MdDone /> : <MdPending />}
                <button onClick={handleUpdateTodoClick}>
                    <RxUpdate />
                </button>
                <button onClick={handleDeleteTodoClick}>
                    <RiDeleteBinLine />
                </button>
            </div>
            {error && (
                <p className="text-red-500 text-sm text-center font-medium">
                    Error: {error.join(', ')}
                </p>
            )}
        </div>
    );
}

export default TodoItem;