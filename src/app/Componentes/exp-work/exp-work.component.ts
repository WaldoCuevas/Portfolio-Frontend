import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpWork } from 'src/app/Model/Data/exp-work';
import { Projects } from 'src/app/Model/Data/projects';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { ExpWorkService } from 'src/app/Service/Data/exp-work.service';

@Component({
  selector: 'app-exp-work',
  templateUrl: './exp-work.component.html',
  styleUrls: ['./exp-work.component.css'],
})
export class ExpWorkComponent implements OnInit {
  
  ExpWorks: ExpWork[];

  expWorkTS: ExpWork = new ExpWork();

  isLogged = true;
  isAdmin = false;
  roles: string[];

  textVacio:string = "";

  constructor(private expWorkService: ExpWorkService,private tokenService: TokenService,public modalService: NgbModal) {}

  textoVacio(description:any):Boolean {
    return this.textVacio !== description ? true : false;
  }

  ngOnInit(): void {
    this.GetDataWork();

    this.roles = this.tokenService.getAuthorities();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles.forEach((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      });
    }
  }

  public GetDataWork(): void {
    this.expWorkService.getDataWork().subscribe({
      next: (data: ExpWork[]) => {
        this.ExpWorks = data;
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataWork() {
    this.expWorkService.addDataWork(this.expWorkTS).subscribe({
      next: (data) => {
        alert('data Registrada con exito');
        this.GetDataWork();
      },
      error(err) {
        alert('Error al registrar');
      },
    });
  }

  public ModifyDataWork(id:number) {
    this.expWorkService.modifyDataWork(id, this.expWorkTS).subscribe({
      next: (data) => {
        alert('data Modificada con exito');
        this.GetDataWork();
      },
      error(err) {
        alert('Error al modificar');
      },
    });
  }

  public DeleteDataWork(id:number) {
    this.expWorkService.deleteDataWork(id).subscribe({
      next: (data) => {
        alert('data delete');
        this.GetDataWork();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }

}
