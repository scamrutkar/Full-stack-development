package com.javacase.sagar.todo.service;

import com.javacase.sagar.todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TodoService {

    private long counter = 0;

    private List<Todo> todos = new ArrayList<>(
            Arrays.asList(
                    new Todo(++counter,"Learning Angular",new Date(),false,"sagar"),
                    new Todo(++counter,"Become an expert at Microservices",new Date(),false,"sagar"),
                    new Todo(++counter,"Learning dance",new Date(),false,"sagar")
            )
    );

    public List<Todo> findAll(){
        return todos;
    }

    public Optional<Todo> findById(long id) {
        return todos.stream().filter(todo -> todo.getId() == id).findFirst();
    }

    public Todo save(long id, Todo todo) {
        if(id == -1){
            todo.setId(++counter);
            todos.add(todo);
        }else {
            Optional<Todo> optionalTodo = findById(id);
            if (!optionalTodo.isEmpty())
                todos.remove(optionalTodo.get());
            todos.add(todo);
        }
        return todo;
    }

    public boolean delete(long id){
        Optional<Todo> optionalTodo = findById(id);
        if(!optionalTodo.isEmpty())
            return todos.remove(optionalTodo.get());
        return false;
    }
}
