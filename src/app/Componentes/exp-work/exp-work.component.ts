import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  //Object Instance
  ExpWorks: ExpWork[];
  expWorkTS: ExpWork = new ExpWork();

  //var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  public formAdd: FormGroup;
  public formModify: FormGroup;
  textVacio: string = '';

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
    this.FormAdd();

    this.FormModify();

    this.GetDataWork();

    this.Admin();
  }

  //Forms

  public FormAdd(): any {
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

  public FormModify(): any {
    this.getDataFromApi();

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
    this.expWorkService.getDataWork().subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log('error');
      },
    });
  }

  //Method CRUD

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
    this.expWorkTS = this.formAdd.value;
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

  public ModifyDataWork(id: number) {
    this.expWorkTS = this.formModify.value;
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

  public DeleteDataWork(id: number) {
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
