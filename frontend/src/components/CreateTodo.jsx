import { useState } from "react";
import api from "../api/api";

function CreateTodo() {
    const [todoDescription, setTodoDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreateTodoSubmit = (e) => {
        setTodoDescription(e.target.value);

        try {
            
        } catch (error) {
            
        }
    };
    
    return (
    <div>
        <input type="text" 
            value={todoDescription} 
            placeholder="Enter description"
        />
        <button onClick={handleCreateTodoSubmit}>
            Create Todo
        </button>
    </div>
    );
}

export default CreateTodo;