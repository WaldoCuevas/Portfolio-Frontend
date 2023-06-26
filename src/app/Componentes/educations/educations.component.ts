import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  educationTS: Educations;

  //var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  
  textVacio: string = '';

  //var modal
  public formAdd: FormGroup;
  public formModify: FormGroup;
  closeResult = '';

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

    this.getAllDataEducation();

    this.Admin();
  }

  //Forms

  public FormAdd(AddDataEducationModal:any): any {

    this.modalService
      .open(AddDataEducationModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

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

  public FormModify(ModifyDataEducationModal:any, id:number): any {

    this.modalService
      .open(ModifyDataEducationModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    this.getDataEducation(id);

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

  //Get Data from api
  getDataEducation(id:number): any {
    this.educationService.getDataEducation(id).subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  public getAllDataEducation(): void {
    this.educationService.getAllDataEducation().subscribe({
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
        this.getAllDataEducation();
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
        this.getAllDataEducation();
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
        this.getAllDataEducation();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }
}
