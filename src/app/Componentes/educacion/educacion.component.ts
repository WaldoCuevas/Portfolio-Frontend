import { Component, OnInit } from '@angular/core';
import { Educations } from 'src/app/Model/educations';
import { EducationsService } from 'src/app/Service/Data/educations.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educations:Educations[];

  constructor(private educationService:EducationsService) { }

  ngOnInit(): void {
    this.getDataEducation();
  }

  public getDataEducation() {
    this.educationService.getDataEducation().subscribe(
      data => {
        this.educations = data;
        console.log(this.educations)
      }
    );
  }

}
