package com.javacase.sagar.todo.resource;

import com.javacase.sagar.todo.model.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AuthenticationResource {

    @RequestMapping("/basicauth")
    public Authentication authenticateUser(){
        return new Authentication("User is authenticated");
    }
}
