import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Projects } from 'src/app/Model/Data/projects';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { ProjectsService } from 'src/app/Service/Data/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  Projects: Projects[];

  projectTS: Projects = new Projects();

  isLogged = true;
  isAdmin = false;
  roles: string[];

  constructor(
    private projectsService: ProjectsService,
    private tokenService: TokenService,
    public modalService:NgbModal,
  ) {}

  ngOnInit(): void {

    this.getDataProject();

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

  public IsFirst(item: any): String {
    return this.Projects[0].project_image === item ? 'carousel-item active' : 'carousel-item';
    
  }

  public getDataProject(): void {
    this.projectsService.getDataProject().subscribe({
      next: (data: Projects[]) => {
        this.Projects = data;
        console.log(this.Projects);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataProject() {
    this.projectsService.addDataProject(this.projectTS).subscribe({
      next: (data) => {
        alert('data Registrada con exito');
        this.getDataProject();
      },
      error(err) {
        alert('Error al registrar');
      },
    });
  }

  public ModifyDataProject(id: number) {
    this.projectsService.modifyDataProject(id, this.projectTS).subscribe({
      next: (data) => {
        alert('data Modificada con exito');
        this.getDataProject();
      },
      error(err) {
        alert('Error al modificar');
      },
    });
  }

  public DeleteDataProject(id: number) {
    this.projectsService.deleteDataProject(id).subscribe({
      next: (data) => {
        alert('data delete');
        this.getDataProject();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }
}
