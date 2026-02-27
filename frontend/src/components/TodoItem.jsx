import { MdDone, MdPending } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";

function TodoItem({todo}) {
    // console.log("TodoItem", todo);
    // console.log("TodoItem", todo.title);

    const handleUpdate = () => {

    };

    const handleDelete = () => {

    };

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <p>{todo.title}</p>
            <div className="flex items-center space-x-4 text-xl cursor-pointer">
                {todo.completed ? <MdDone /> : <MdPending />}
                <button onClick={handleUpdate}>
                    <RxUpdate />
                </button>
                <button onClick={handleDelete}>
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;