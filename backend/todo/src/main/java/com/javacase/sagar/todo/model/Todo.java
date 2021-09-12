package com.javacase.sagar.todo.model;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Todo {

    private long id;
    private String description;
    private Date targetDate;
    private boolean done;
    private String username;
}
