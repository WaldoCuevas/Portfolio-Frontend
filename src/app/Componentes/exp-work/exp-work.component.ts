import { Component, OnInit } from '@angular/core';
import { ExpWork } from 'src/app/Model/exp-work';
import { ExpWorkService } from 'src/app/Service/Data/exp-work.service';

@Component({
  selector: 'app-exp-work',
  templateUrl: './exp-work.component.html',
  styleUrls: ['./exp-work.component.css']
})
export class ExpWorkComponent implements OnInit {

  expWorks:ExpWork[];

  constructor(private expWorkService:ExpWorkService) { }

  ngOnInit(): void {
    this.getDataWork();
  }

  public getDataWork(): void {
    this.expWorkService.getDataWork().subscribe({
      next: (data: ExpWork[]) => {
        this.expWorks = data;
        console.log(this.expWorks);
      },
      error(err: any) {
        console.error();
      },
    });
  }

  public AddDataWork(): any {}

  public ModifyDataWork(): any {}

  public DeleteDataWork(): void {}

}
