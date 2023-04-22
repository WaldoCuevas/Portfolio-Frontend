import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Technologys } from 'src/app/Model/Data/technologys';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { TechnologysService } from 'src/app/Service/Data/technologys.service';

@Component({
  selector: 'app-technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css'],
})
export class TechnologysComponent implements OnInit {
  technologys: Technologys[];

  technologyTS: Technologys = new Technologys();

  isLogged = true;
  isAdmin = false;
  roles: string[];

  constructor(
    private technologysService: TechnologysService,
    private tokenService: TokenService,
    public modalService:NgbModal
  ) {}

  ngOnInit(): void {
    this.getDataTechnologys();

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

  public getDataTechnologys(): void {
    this.technologysService.getDataTechnology().subscribe({
      next: (data: Technologys[]) => {
        this.technologys = data;
        console.log(this.technologys);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataTechnologys() {
    this.technologysService.addDataTechnology(this.technologyTS).subscribe({
      next: (data) => {
        alert('data Registrada con exito');
        this.getDataTechnologys();
      },
      error(err) {
        alert('Error al registrar');
      },
    });
  }

  public ModifyDataTechnologys(id:number) {
    this.technologysService.modifyDataTechnology(id, this.technologyTS).subscribe({
      next: (data) => {
        alert('data Modificada con exito');
        this.getDataTechnologys();
      },
      error(err) {
        alert('Error al modificar');
      },
    });
  }

  public DeleteDataTechnologys(id:number) {
    this.technologysService.deleteDataTechnology(id).subscribe({
      next: (data) => {
        alert('data delete');
        this.getDataTechnologys();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }
}
