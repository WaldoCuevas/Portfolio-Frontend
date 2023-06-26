import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  projectTS: Projects;

  //Var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  
  //var modal
  public formAdd: FormGroup;
  public formModify: FormGroup;
  closeResult = '';

  constructor(
    private projectsService: ProjectsService,
    private tokenService: TokenService,
    public modalService:NgbModal,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {

    this.getAllDataProject();

    this.Admin();
  }

  //Forms

  public FormAdd(AddDataProjectModal:any): any {

    this.modalService
      .open(AddDataProjectModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

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

  public FormModify(ModifyDataProjectModal:any, id:number): any {

    this.modalService
      .open(ModifyDataProjectModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    this.getDataProject(id);

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

  // Modal close
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

  //Method CRUD

  getDataProject(id:number): any {
    this.projectsService.getDataProject(id).subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  public getAllDataProject(): void {
    this.projectsService.getAllDataProject().subscribe({
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
        this.getAllDataProject();
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
        this.getAllDataProject();
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
        this.getAllDataProject();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }
  
}
