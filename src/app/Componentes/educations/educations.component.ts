import { Component, OnInit } from '@angular/core';
import { Educations } from 'src/app/Model/educations';
import { EducationsService } from 'src/app/Service/Data/educations.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  educations:Educations[];

  constructor(private educationService:EducationsService) { }

  ngOnInit(): void {
    this.getDataEducation();
  }

  public getDataEducation(): void {
    this.educationService.getDataEducation().subscribe({
      next: (data: Educations[]) => {
        this.educations = data;
        console.log(this.educations);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataEducation(): any {}

  public ModifyDataEducation(): any {}

  public DeleteDataEducation(): void {}

}
