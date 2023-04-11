import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/Auth/user';
import { UserService } from 'src/app/Service/Auth/user.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  user:User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.GetPersonalData();
  }

  public GetPersonalData(): void {
    this.userService.GetPersonalData().subscribe({
      next: (data: User) => {
        this.user = data;
        console.log(this.user);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddPersonalData(): any {}

  public ModifyPersonalData(): any {}

  public DeletePersonalData(): void {}

}
