package com.learning.todoapp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.todoapp.repositories.TodoRepository;
import com.learning.todoapp.service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

}
