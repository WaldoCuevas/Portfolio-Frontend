import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  //Object Instance
  technologys: Technologys[];
  technologyTS: Technologys = new Technologys();

  //var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  id:number;
  public formAdd: FormGroup;
  public formModify: FormGroup;

  constructor(
    private technologysService: TechnologysService,
    private tokenService: TokenService,
    public modalService:NgbModal,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {

    this.FormAdd();

    this.FormModify();

    this.getDataTechnologys();

    this.Admin();
  }

  //Forms

  public FormAdd(): any {
    this.formAdd = this.formBuilder.group({
      name_technology: ['', [Validators.required]],
      description_technology_r1: ['', [Validators.required ]],
      description_technology_r2: ['', [Validators.required]],
      badge_technology_1: [""],
      badge_technology_2: [""],
      badge_technology_3: [""],
      badge_technology_4: [""]
    });
  }

  public FormModify(): any {

    this.getDataFromApi();

    this.formModify = this.formBuilder.group({
      tecnology_id: [{ value: '', disabled: true }, Validators.required],
      name_technology: ['', [Validators.required]],
      description_technology_r1: ['', [Validators.required, Validators.maxLength(254)]],
      description_technology_r2: ['', [Validators.required, Validators.maxLength(254)]],
      badge_technology_1: [""],
      badge_technology_2: [""],
      badge_technology_3: [""],
      badge_technology_4: [""]
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
    this.technologysService.getDataTechnology().subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  //Method CRUD

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
    this.technologyTS = this.formAdd.value;
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
    this.technologyTS = this.formModify.value;
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
