import { Component, OnInit } from '@angular/core';
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
  constructor(
    private skillsService: SkillsService,
    private tokenService: TokenService,
    public modalService:NgbModal
  ) {}

  skills: Skills[];

  skillTS: Skills = new Skills();

  isLogged = true;
  isAdmin = false;
  roles: string[];

  ngOnInit(): void {
    this.getDataSkill();

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
