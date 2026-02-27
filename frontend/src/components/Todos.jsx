import { useState } from "react";
import api from "../api/api";
import TodoItem from "./TodoItem";

function Todos({todos, handleUpdate, handleDelete}) {
    // console.log("Todos todos", todos);
    return (
        <div className="max-w-2xl mx-auto mt-6 space-y-3">
            {todos && todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} handleUpdate={handleUpdate} handleDelete={handleDelete} />    
            })}
        </div>
    );
    
};

export default Todos;