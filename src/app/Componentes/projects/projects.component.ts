import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  //Object Instance
  Projects: Projects[];
  projectTS: Projects = new Projects();

  //Var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  public formAdd: FormGroup;
  public formModify: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private tokenService: TokenService,
    public modalService:NgbModal,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {

    this.FormAdd();

    this.FormModify();

    this.getDataProject();

    this.Admin();
  }

  //Forms

  public FormAdd(): any {
    this.formAdd = this.formBuilder.group({
      project_image: ['', [Validators.required]],
      project_title: ['', [Validators.required, ]],
      project_name: ['', [Validators.required ]],
      project_description: ['', [Validators.required]],
      link_project: ['', [Validators.required, ]],
      link_github: ['', [Validators.required ]],
      start_project: ['', [Validators.required, ]],
      end_project: ['', [Validators.required ]],
    });
  }

  public FormModify(): any {

    this.getDataFromApi();

    this.formModify = this.formBuilder.group({
      project_id: [{ value: '', disabled: true }, Validators.required],
      project_image: ['', [Validators.required]],
      project_title: ['', [Validators.required, ]],
      project_name: ['', [Validators.required ]],
      project_description: ['', [Validators.required]],
      link_project: ['', [Validators.required, ]],
      link_github: ['', [Validators.required ]],
      start_project: ['', [Validators.required, ]],
      end_project: ['', [Validators.required ]],
    
    });
  }

  //Method for admin rol
  public Admin(): void {
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

  //Get Data from api
  getDataFromApi(): any {
    this.projectsService.getDataProject().subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  //Method CRUD

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
    this.projectTS = this.formAdd.value;
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
    this.projectTS = this.formModify.value;
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
