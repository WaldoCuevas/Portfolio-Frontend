import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/Model/Data/projects';
import { ProjectsService } from 'src/app/Service/Data/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  Projects:Projects[];

  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.getDataProject();
  }


  public getDataProject(): void {
    this.projectsService.getDataProject().subscribe({
      next: (data: Projects[]) => {
        this.Projects = data;
        console.log(this.Projects);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataProject(): any {}

  public ModifyDataProject(): any {}

  public DeleteDataProject(): void {}

}
