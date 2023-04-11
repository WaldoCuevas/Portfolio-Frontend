import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/Model/skills';
import { SkillsService } from 'src/app/Service/Data/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillsService:SkillsService) { }

  skills:Skills[];

  ngOnInit(): void {
    this.getDataSkill();
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

  public AddDataSkill(): any {}

  public ModifyDataSkill(): any {}

  public DeleteDataSkill(): void {}

}
