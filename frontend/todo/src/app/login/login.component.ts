import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sagar';
  password = 'password';
  errorMessage = 'Invalid credentials';
  invalidCredentials = false;

  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidCredentials = false;
      sessionStorage.setItem('authenticatedUser', this.username);
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidCredentials = true;
    }
  }

  handleBasicLogin() {
    this.basicAuthenticationService.basicAuthentication(this.username, this.password)
      .subscribe(
        data => {
          this.invalidCredentials = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          this.invalidCredentials = true;
        }
      );
  }

}
