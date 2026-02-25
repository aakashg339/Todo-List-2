package com.learning.todoapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.todoapp.payload.TodoItemDTO;
import com.learning.todoapp.payload.TodoResponse;
import com.learning.todoapp.service.TodoService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/api")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/todos")
    public ResponseEntity<TodoResponse> getAllTodos() {
        TodoResponse todoResponse = todoService.getAllTodos();
        
        return new ResponseEntity<>(todoResponse, HttpStatus.ACCEPTED);
    }
    
    @PostMapping("/todo")
    public ResponseEntity<TodoItemDTO> createTodo(@Valid @RequestBody TodoItemDTO todoItemDTO) {
        TodoItemDTO savedTodoItemDTO = todoService.createTodo(todoItemDTO);

        return new ResponseEntity<>(savedTodoItemDTO, HttpStatus.CREATED);
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<TodoItemDTO> deleteTodo(@PathVariable Long todoId) {
        TodoItemDTO deletedTodoItemDTO = todoService.deleteTodo(todoId);
        
        return new ResponseEntity<>(deletedTodoItemDTO, HttpStatus.OK);
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<TodoItemDTO> updateTodo(@PathVariable Long todoId, @Valid @RequestBody TodoItemDTO todoItemDTO) {
        TodoItemDTO updatedTodoItemDTO = todoService.updateTodo(todoId, todoItemDTO);
        
        return new ResponseEntity<>(updatedTodoItemDTO, HttpStatus.OK);
    }

}
