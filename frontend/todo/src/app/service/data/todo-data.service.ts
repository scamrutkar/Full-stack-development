import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Todo {

  constructor(
    public id : number,
    public description : string,
    public done: boolean,
    public targetDate : Date,
    public username : string ){
    
  }
  

}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string){
    return this.http.get<Todo[]>(`http://localhost:8080/welcome/${username}/todos`);
  }

  deleteTodo(username: string, id: number){
    return this.http.delete(`http://localhost:8080/welcome/${username}/todos/${id}`);
  }

  getTodo(username : string, id : number){
    return this.http.get<Todo>(`http://localhost:8080/welcome/${username}/todos/${id}`);
  }

  updateTodo(username : string, id : number, todo : Todo){
    return this.http.put(`http://localhost:8080/welcome/${username}/todos/${id}`,todo);
  }

  createTodo(username : string, todo : Todo){
    return this.http.post(`http://localhost:8080/welcome/${username}/todos`,todo);
  }
}
