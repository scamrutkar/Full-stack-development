import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo!: Todo;
  id: number = 0;

  constructor(private todoDataService: TodoDataService,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false, new Date(), "");
    console.log(this.id);
    this.todoDataService.getTodo('sagar', this.id).subscribe(
      data => {
        this.todo = data;
        console.log(this.todo);
      }
    )

  }

  saveData() {
    console.log(this.todo);
    if (this.id === -1) {
      this.todoDataService.createTodo('sagar', this.todo).subscribe(
        data => {
          this.route.navigate(['todos']);
        }
      )
    } else {
      this.todoDataService.updateTodo('sagar', this.id, this.todo).subscribe(
        data => {
          this.route.navigate(['todos']);
        }
      )
    }
  }

  resetData() {
    this.todo = new Todo(this.id, "", false, new Date(), "");
  }

}
