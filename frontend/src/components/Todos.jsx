import { useState } from "react";
import api from "../api/api";
import TodoItem from "./TodoItem";

function Todos({todos, setTodos}) {
    // console.log("Todos todos", todos);
    return (
        <div className="max-w-2xl mx-auto mt-6 space-y-3">
            {todos && todos.map((todo, idx) => {
                return <TodoItem key={idx} todo={todo} />    
            })}
        </div>
    );
    
};

export default Todos;