import { Component } from '@angular/core';
import { UserService } from './Service/Auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortFolio-Angular';

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
  }

}
