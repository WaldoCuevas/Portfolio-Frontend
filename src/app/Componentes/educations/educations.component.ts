import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educations } from 'src/app/Model/Data/educations';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { EducationsService } from 'src/app/Service/Data/educations.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css'],
})
export class EducationsComponent implements OnInit {
  //Object Instance
  educations: Educations[];
  educationTS: Educations = new Educations();

  //var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  public formAdd: FormGroup;
  public formModify: FormGroup;
  textVacio: string = '';

  constructor(
    private educationService: EducationsService,
    private tokenService: TokenService,
    public modalService: NgbModal,
    private formBuilder:FormBuilder
  ) {}

  textoVacio(description: any): Boolean {
    return this.textVacio !== description ? true : false;
  }

  ngOnInit(): void {

    this.FormAdd();

    this.FormModify();

    this.getDataEducation();

    this.Admin();
  }

  //Forms

  public FormAdd(): any {
    this.formAdd = this.formBuilder.group({
      education_image: ['', [Validators.required]],
      school: ['', [Validators.required, ]],
      qualification: ['', [Validators.required ]],
      description_education_r1: ['', [Validators.required]],
      description_education_r2: ['', [Validators.required, ]],
      description_education_r3: ['', [Validators.required ]],
      description_education_r4: ['', [Validators.required]],
      start_education: ['', [Validators.required, ]],
      end_education: ['', [Validators.required ]],
    });
  }

  public FormModify(): any {

    this.getDataFromApi();

    this.formModify = this.formBuilder.group({
      education_id: [{ value: '', disabled: true }, Validators.required],
      education_image: ['', [Validators.required]],
      school: ['', [Validators.required, ]],
      qualification: ['', [Validators.required ]],
      description_education_r1: ['', [Validators.required]],
      description_education_r2: ['', [Validators.required, ]],
      description_education_r3: ['', [Validators.required ]],
      description_education_r4: ['', [Validators.required]],
      start_education: ['', [Validators.required, ]],
      end_education: ['', [Validators.required ]],
    
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
    this.educationService.getDataEducation().subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  //Method CRUD

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
    this.educationTS = this.formAdd.value;
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

  public ModifyDataEducation(id: number) {
    this.educationTS = this.formModify.value;
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

  public DeleteDataEducation(id: number) {
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
