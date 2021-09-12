import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Welcome {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeWelcomeDataService(username: string){
    return this.http.get<Welcome>(`http://localhost:8080/welcome/${username}`)
  }
}
