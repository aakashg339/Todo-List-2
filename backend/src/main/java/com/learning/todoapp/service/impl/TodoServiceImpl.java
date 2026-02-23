package com.learning.todoapp.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.todoapp.exceptions.ResourceNotFoundException;
import com.learning.todoapp.model.TodoItem;
import com.learning.todoapp.payload.TodoItemDTO;
import com.learning.todoapp.payload.TodoResponse;
import com.learning.todoapp.repositories.TodoRepository;
import com.learning.todoapp.service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public TodoResponse getAllTodos() {
        List<TodoItem> todoItems = todoRepository.findAll();

        List<TodoItemDTO> todoItemDTOs = todoItems.stream()
            .map(todoItem -> modelMapper.map(todoItem, TodoItemDTO.class))
            .toList();
        
        TodoResponse todoResponse = new TodoResponse(todoItemDTOs);

        return todoResponse;
    }

    @Override
    public TodoItemDTO createTodo(TodoItemDTO todoItemDTO) {
        TodoItem todoItem = modelMapper.map(todoItemDTO, TodoItem.class);

        TodoItem savedTodoItem = todoRepository.save(todoItem);

        return modelMapper.map(savedTodoItem, TodoItemDTO.class);
    }

    @Override
    public TodoItemDTO deleteTodo(Long todoId) {
        TodoItem deletedTodoItem = todoRepository.findById(todoId)
            .orElseThrow(() -> new ResourceNotFoundException("TodoItem", "Id", todoId));
        
        todoRepository.deleteById(todoId);

        return modelMapper.map(deletedTodoItem, TodoItemDTO.class);
    }

    @Override
    public TodoItemDTO updateTodo(Long todoId, TodoItemDTO todoItemDTO) {
        TodoItem todoItem = todoRepository.findById(todoId)
            .orElseThrow(() -> new ResourceNotFoundException("TodoItem", "Id", todoId));
        
        todoItem.setTitle(todoItemDTO.getTitle());
        todoItem.setCompleted(todoItemDTO.getCompleted());

        TodoItem updatedTodoItem = todoRepository.save(todoItem);

        return modelMapper.map(updatedTodoItem, TodoItemDTO.class);
    }

}
