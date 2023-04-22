import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/Model/Data/persona';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { PersonaService } from 'src/app/Service/Data/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  
  persona: Persona = new Persona();

  isLogged = true;
  isAdmin = false;
  roles: string[];

  constructor(private personaService: PersonaService,private tokenService:TokenService,
    public modalService:NgbModal) {}

  ngOnInit(): void {
    
    this.GetPersonalData();

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

  public GetPersonalData() {
    this.personaService.GetPersonalData().subscribe({
      next: (data: Persona) => {
        this.persona = data;
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddPersonalData() {
    this.personaService.AddPersonalData(this.persona).subscribe({
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
    this.personaService.ModifyPersonalData(this.persona).subscribe({
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
    this.personaService.DeletePersonalData().subscribe({
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
