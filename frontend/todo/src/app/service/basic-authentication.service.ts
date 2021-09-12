import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const AUTHENTICATED_USER = 'authenticatedUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  basicAuthentication(username: string, password: string){
    
    let basicAuthenticationString = 'Basic ' + window.btoa(username+':'+password);

    let headers = new HttpHeaders({
      Authorization: basicAuthenticationString
    });
    return this.http.get(`http://localhost:8080/basicauth`,{headers})
      .pipe(
        map (
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,basicAuthenticationString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
