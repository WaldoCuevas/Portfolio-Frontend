import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  //Object Instance
  ExpWorks: ExpWork[];
  expWorkTS: ExpWork;

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
    private expWorkService: ExpWorkService,
    private tokenService: TokenService,
    public modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  textoVacio(description: any): Boolean {
    return this.textVacio !== description ? true : false;
  }

  ngOnInit(): void {

    this.GetAllDataWork();

    this.Admin();
  }

  //Forms

  public FormAdd(AddDataWorkModal:any): any {

    this.modalService
      .open(AddDataWorkModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    this.formAdd = this.formBuilder.group({
      work_image: ['', [Validators.required]],
      workplace: ['', [Validators.required]],
      workstation: ['', [Validators.required]],
      job: ['', [Validators.required]],
      description_work_exp_r1: ['', [Validators.required]],
      description_work_exp_r2: ['', [Validators.required]],
      description_work_exp_r3: ['', [Validators.required]],
      start_work_exp: ['', [Validators.required]],
      end_work_exp: ['', [Validators.required]],
    });
  }

  public FormModify(ModifyDataWorkModal:any, id:number): any {

    this.modalService
      .open(ModifyDataWorkModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    this.GetDataWork(id);

    this.formModify = this.formBuilder.group({
      work_exp_id: [{ value: '', disabled: true }, Validators.required],
      work_image: ['', [Validators.required]],
      workplace: ['', [Validators.required]],
      workstation: ['', [Validators.required]],
      job: ['', [Validators.required]],
      description_work_exp_r1: ['', [Validators.required]],
      description_work_exp_r2: ['', [Validators.required]],
      description_work_exp_r3: ['', [Validators.required]],
      start_work_exp: ['', [Validators.required]],
      end_work_exp: ['', [Validators.required]],
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
  GetDataWork(id:number): any {
    this.expWorkService.getDataWork(id).subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log('error');
      },
    });
  }

  public GetAllDataWork(): void {
    this.expWorkService.getAllDataWork().subscribe({
      next: (data: ExpWork[]) => {
        this.ExpWorks = data;
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataWork() {
    this.expWorkTS = this.formAdd.value;
    this.expWorkService.addDataWork(this.expWorkTS).subscribe({
      next: (data) => {
        alert('data Registrada con exito');
        this.GetAllDataWork();
      },
      error(err) {
        alert('Error al registrar');
      },
    });
  }

  public ModifyDataWork(id: number) {
    this.expWorkTS = this.formModify.value;
    this.expWorkService.modifyDataWork(id, this.expWorkTS).subscribe({
      next: (data) => {
        alert('data Modificada con exito');
        this.GetAllDataWork();
      },
      error(err) {
        alert('Error al modificar');
      },
    });
  }

  public DeleteDataWork(id: number) {
    this.expWorkService.deleteDataWork(id).subscribe({
      next: (data) => {
        alert('data delete');
        this.GetAllDataWork();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }
}
