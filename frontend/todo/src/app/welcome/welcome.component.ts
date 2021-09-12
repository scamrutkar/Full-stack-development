import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessage : string | undefined;

  constructor(private router : ActivatedRoute,
    private service : WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.router.snapshot.params['name'];
    
  }

  generateWelcomeMessage(){
    this.service.executeWelcomeDataService(this.name).subscribe(
      success => this.welcomeMessage = success.message,
      error => console.log(error)
    );;
  }

}
