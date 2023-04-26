import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educations } from 'src/app/Model/Data/educations';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { EducationsService } from 'src/app/Service/Data/educations.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  educations:Educations[];

  educationTS:Educations = new Educations();

  isLogged = true;
  isAdmin = false;
  roles: string[];

  textVacio:string = "";

  constructor(private educationService:EducationsService,private tokenService:TokenService,
    public modalService:NgbModal) { }

  textoVacio(description:any):Boolean {
    return this.textVacio !== description ? true : false;
  }

  ngOnInit(): void {
    this.getDataEducation();

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

  public getDataEducation(): void {
    this.educationService.getDataEducation().subscribe({
      next: (data: Educations[]) => {
        this.educations = data;
        console.log(this.educations);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataEducation() {
    this.educationService.addDataEducation(this.educationTS).subscribe({
      next: (data) => {
        alert('data Registrada con exito');
        this.getDataEducation();
      },
      error(err) {
        alert('Error al registrar');
      },
    });
  }

  public ModifyDataEducation(id:number) {
    this.educationService.modifyDataEducation(id, this.educationTS).subscribe({
      next: (data) => {
        alert('data Modificada con exito');
        this.getDataEducation();
      },
      error(err) {
        alert('Error al modificar');
      },
    });
  }

  public DeleteDataEducation(id:number) {
    this.educationService.deleteDataEducation(id).subscribe({
      next: (data) => {
        alert('data delete');
        this.getDataEducation();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }

}
