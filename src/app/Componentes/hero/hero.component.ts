import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Data/persona';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { PersonaService } from 'src/app/Service/Data/persona.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  user:Persona;

  roles: string[];
  isAdmin = false;
  isLogged = false;

  constructor(private personaService:PersonaService,private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {

      this.roles = this.tokenService.getAuthorities();
  
      if (this.tokenService.getToken()) {
        this.isLogged = true;
        this.roles.forEach(rol => {
          if (rol === 'ROLE_ADMIN') {
            this.isAdmin = true;
  
          }
        })
  
      }

    this.GetPersonalData();
  }

  public GetPersonalData(): void {
    this.personaService.GetPersonalData().subscribe({
      next: (data: Persona) => {
        this.user = data;
        console.log(this.user);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddPersonalData(): any {}

  public ModifyPersonalData(): any {}

  public DeletePersonalData(): void {}

}
