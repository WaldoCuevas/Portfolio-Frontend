import { Component, OnInit } from '@angular/core';
import { Technologys } from 'src/app/Model/Data/technologys';
import { TechnologysService } from 'src/app/Service/Data/technologys.service';

@Component({
  selector: 'app-technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css']
})
export class TechnologysComponent implements OnInit {

  technologys:Technologys[];

  constructor(private technologysService:TechnologysService) { }

  ngOnInit(): void {
    this.getDataTechnologys();
  }

  public getDataTechnologys(): void {
    this.technologysService.getDataTechnology().subscribe({
      next: (data: Technologys[]) => {
        this.technologys = data;
        console.log(this.technologys);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataTechnologys(): any {}

  public ModifyDataTechnologys(): any {}

  public DeleteDataTechnologys(): void {}

}
