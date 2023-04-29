import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skills } from 'src/app/Model/Data/skills';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { SkillsService } from 'src/app/Service/Data/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  
  //Object Instance
  skills: Skills[];
  skillTS: Skills = new Skills();

  //var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  id:number;
  public formAdd: FormGroup;
  public formModify: FormGroup;

  constructor(
    private skillsService: SkillsService,
    private tokenService: TokenService,
    public modalService:NgbModal,
    private formBuilder:FormBuilder
    ) {}

  ngOnInit(): void {

    this.FormAdd();

    this.FormModify();

    this.getDataSkill();

    this.Admin();
  }

  //Forms

  public FormAdd(): any {
    this.formAdd = this.formBuilder.group({
      skill_image: ['', [Validators.required]],
      skills_name: ['', [Validators.required, ]],
      skill_porcent: ['', [Validators.required ]],
    });
  }

  public FormModify(): any {

    this.getDataFromApi();

    this.formModify = this.formBuilder.group({
      skill_id: [{ value: '', disabled: true }, Validators.required],
      skill_image: ['', [Validators.required]],
      skills_name: ['', [Validators.required, ]],
      skill_porcent: ['', [Validators.required ]],
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
    this.skillsService.getDataSkill().subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  //Method CRUD

  public getDataSkill(): void {
    this.skillsService.getDataSkill().subscribe({
      next: (data: Skills[]) => {
        this.skills = data;
        console.log(this.skills);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataSkill() {
    this.skillTS = this.formAdd.value;
    this.skillsService.addDataSkill(this.skillTS).subscribe({
      next: (data) => {
        alert('data Registrada con exito');
        this.getDataSkill();
      },
      error(err) {
        alert('Error al registrar');
      },
    });
  }

  public ModifyDataSkill(id: number) {
    this.skillTS = this.formModify.value;
    this.skillsService.modifyDataSkill(id, this.skillTS).subscribe({
      next: (data) => {
        alert('data Modificada con exito');
        this.getDataSkill();
      },
      error(err) {
        alert('Error al modificar');
      },
    });
  }

  public DeleteDataSkill(id: number) {
    this.skillsService.deleteDataSkill(id).subscribe({
      next: (data) => {
        alert('data delete');
        this.getDataSkill();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }
}
