import { Component, OnInit } from '@angular/core';
import { ExpWork } from 'src/app/Model/Data/exp-work';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { ExpWorkService } from 'src/app/Service/Data/exp-work.service';

@Component({
  selector: 'app-exp-work',
  templateUrl: './exp-work.component.html',
  styleUrls: ['./exp-work.component.css']
})
export class ExpWorkComponent implements OnInit {

  expWorks:ExpWork[];

  isLogged = true;
  isAdmin = false;
  roles: string[];

  constructor(private expWorkService:ExpWorkService, private tokenService:TokenService) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      (this.isLogged = true),
        this.roles.forEach((rol) => {
          if (rol === 'ROLE_ADMIN') {
            this.isAdmin = true;
          }
        });
    }

    this.getDataWork();
  }

  public getDataWork(): void {
    this.expWorkService.getDataWork().subscribe({
      next: (data: ExpWork[]) => {
        this.expWorks = data;
        console.log(this.expWorks);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataWork(): any {}

  public ModifyDataWork(): any {}

  public DeleteDataWork(id:number): void {}

}
