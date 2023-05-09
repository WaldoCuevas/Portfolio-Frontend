import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/Model/Data/persona';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { PersonaService } from 'src/app/Service/Data/persona.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {

  //object instance
  persona: Persona = new Persona();

  //var
  roles: string[];
  isAdmin = false;
  isLogged = false;
  id:number;
  public formAdd: FormGroup;
  public formModify: FormGroup;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService,
    public modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    //formulario Añadir
    this.FormAdd();

    //formulario Modificar
    this.FormModify();

    //Obtener data
    this.GetPersonalData();

    //Authorizacion para las funcionalidades ADMIN
    this.Admin();
  }

  //Forms

  public FormAdd(): any {
    this.formAdd = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      user_image: ['', [Validators.required, Validators.maxLength(254)]],
      about_me_r1: ['', [Validators.required, Validators.maxLength(254)]],
      about_me_r2: ['', [Validators.required, Validators.maxLength(254)]],
    });
  }

  public FormModify(): any {

    this.getDataFromApi();

    this.formModify = this.formBuilder.group({
      user_id: [{ value: '', disabled: true }, Validators.required],
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      user_image: ['', [Validators.required, Validators.maxLength(254)]],
      about_me_r1: ['', [Validators.required, Validators.maxLength(254)]],
      about_me_r2: ['', [Validators.required, Validators.maxLength(254)]],
    });
  }

  //Modals

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
    this.personaService.getPersonalData().subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  //Method CRUD

  public GetPersonalData() {
    this.personaService.getPersonalData().subscribe({
      next: (data: Persona) => {
        this.persona = data;
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddPersonalData() {
    this.persona = this.formAdd.value;
    this.personaService.addPersonalData(this.persona).subscribe({
      next: (data) => {
        alert('data Registrada con exito');
        this.GetPersonalData();
      },
      error(err) {
        alert('Error al registrar');
      },
    });
  }

  public ModifyPersonalData() {
    this.persona = this.formModify.value;
    this.id = this.formModify.controls['user_id'].value;
    console.log(this.id);

    this.personaService.modifyPersonalData(this.persona, this.id).subscribe({
      next: (data) => {
        alert('data Modificada con exito');
        this.GetPersonalData();
      },
      error(err) {
        alert('Error al modificar');
      },
    });
  }

  public DeletePersonalData() {
    this.personaService.deletePersonalData().subscribe({
      next: (data) => {
        alert('data delete');
        this.GetPersonalData();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }

}
