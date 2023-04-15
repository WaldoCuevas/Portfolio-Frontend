import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/Data/persona';
import { PersonaService } from 'src/app/Service/Data/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  
  user: Persona = new Persona();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.GetPersonalData();
  }

  public GetPersonalData(): void {
    this.personaService.GetPersonalData().subscribe({
      next: (data: Persona) => {
        this.user = data;
        //console.log(this.user);
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
