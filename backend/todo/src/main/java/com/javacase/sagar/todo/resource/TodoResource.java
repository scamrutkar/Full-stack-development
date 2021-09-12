package com.javacase.sagar.todo.resource;

import com.javacase.sagar.todo.model.Todo;
import com.javacase.sagar.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class TodoResource {

    @Autowired
    TodoService todoService;

    @RequestMapping(method = RequestMethod.GET, value = "/welcome/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/welcome/{username}/todos/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable("id") long id){
        Optional<Todo> optionalTodo = todoService.findById(id);
        if(!optionalTodo.isEmpty())
            return ResponseEntity.ok(optionalTodo.get());
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/welcome/{username}/todos/{id}")
    public ResponseEntity UpdateTodo(@PathVariable("username") String username,
                                          @PathVariable("id") long id,
                                          @RequestBody Todo todo){
        todoService.save(id, todo);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/welcome/{username}/todos")
    public ResponseEntity addTodo(@PathVariable("username") String username,
                                          @RequestBody Todo todo){
        Todo createdTodo = todoService.save(-1, todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/welcome/{username}/todos/{id}")
    public ResponseEntity deleteTodos(@PathVariable("username") String username,
                                          @PathVariable("id") long id){
        if(todoService.delete(id))
            ResponseEntity.ok().build();
        return ResponseEntity.noContent().build();
    }
}
