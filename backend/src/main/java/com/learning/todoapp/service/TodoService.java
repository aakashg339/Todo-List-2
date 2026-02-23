package com.learning.todoapp.service;

import com.learning.todoapp.payload.TodoItemDTO;
import com.learning.todoapp.payload.TodoResponse;

public interface TodoService {

    TodoResponse getAllTodos();

    TodoItemDTO createTodo(TodoItemDTO todoItemDTO);

    TodoItemDTO deleteTodo(Long todoId);

    TodoItemDTO updateTodo(Long todoId, TodoItemDTO todoItemDTO);

}
