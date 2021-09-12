import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService : BasicAuthenticationService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler){

    let basicAuthenticationString = this.basicAuthenticationService.getAuthenticatedToken();
    let user = this.basicAuthenticationService.getAuthenticatedUser();

    if(user && basicAuthenticationString){
      req = req.clone({
        setHeaders : {
          Authorization : basicAuthenticationString
        }
      });
    
    }
    
    return next.handle(req);

  }

  
}
