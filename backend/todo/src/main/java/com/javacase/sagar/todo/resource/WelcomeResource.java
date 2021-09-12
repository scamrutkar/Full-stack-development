package com.javacase.sagar.todo.resource;

import com.javacase.sagar.todo.model.Welcome;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class WelcomeResource {

    @RequestMapping(method = RequestMethod.GET, value = "/welcome/{username}")
    public Welcome getWelcomeMessage(@PathVariable String username){
        return new Welcome(String.format("Hello, Welcome %s",username));
    }

}
