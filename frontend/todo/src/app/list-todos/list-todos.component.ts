import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo, TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService,
    private router : Router) { }

  ngOnInit(): void {
    this.executeGetCall();
  }

  executeGetCall() {
    this.todoDataService.retrieveAllTodos('sagar').subscribe(
      success => {
        this.todos = success;
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos',id]);


  }

  deleteTodo(id: number) {
    this.todoDataService.deleteTodo('sagar', id).subscribe(
      success => {
        this.executeGetCall();
      }
    );
  }

}
