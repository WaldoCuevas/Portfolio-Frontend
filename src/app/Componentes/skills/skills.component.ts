import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  skills: Skills[] = [];
  skillsBack: Skills[] = [];
  skillsFront: Skills[] = [];
  skillTS: Skills;

  //var
  isLogged = true;
  isAdmin = false;
  roles: string[];
  id:number;

  //var modal
  public formAdd: FormGroup;
  public formModify: FormGroup;
  closeResult = '';

  constructor(
    private skillsService: SkillsService,
    private tokenService: TokenService,
    public modalService:NgbModal,
    private formBuilder:FormBuilder
    ) {}

  ngOnInit(): void {

    this.getAllDataSkill();

    this.Admin();
  }

  //Forms

  public FormAdd(AddDataSkillModal:any): any {

    this.modalService
      .open(AddDataSkillModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );


    this.formAdd = this.formBuilder.group({
      skill_image: ['', [Validators.required]],
      skills_name: ['', [Validators.required, ]],
      skill_porcent: ['', [Validators.required ]],
    });
  }

  public FormModify(ModifyDataSkillModal:any, id:number): any {

    this.modalService
      .open(ModifyDataSkillModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    this.getDataSkill(id);

    this.formModify = this.formBuilder.group({
      skill_id: [{ value: '', disabled: true }, Validators.required],
      skill_image: ['', [Validators.required]],
      skills_name: ['', [Validators.required, ]],
      skill_porcent: ['', [Validators.required ]],
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

  //Get Data from api
  getDataSkill(id:number): any {
    this.skillsService.getDataSkill(id).subscribe({
      next: (data: any) => {
        this.formModify.patchValue(data);
      },
      error(err) {
        console.log("error")
      },
    });

  }

  //Method CRUD

  public getAllDataSkill(): void {
    this.skillsService.getAllDataSkill().subscribe({
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
        this.getAllDataSkill();
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
        this.getAllDataSkill();
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
        this.getAllDataSkill();
      },
      error(err) {
        alert('error data delete');
      },
    });
  }
  
}
