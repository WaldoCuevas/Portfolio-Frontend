import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/Model/Data/skills';

// Variables de entorno
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient:HttpClient) { }

  //Metodos Get

  public getDataSkill(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(environment.urlGetData + 'DataSkill');
  }
  //Metodos Post

  public addDataSkill(skills: Skills): Observable<Skills> {
    return this.httpClient.post<Skills>(environment.urlPostData + 'DataSkill',skills);
  }

  //Metodos Put

  public modifyDataSkill(id: number, skills: Skills): Observable<Skills> {
    return this.httpClient.put<Skills>(environment.urlPutData + 'DataSkill/' + `${id}`, skills);
  }

  //Metodos Delete
  
  public deleteDataSkill(id: number): Observable<any> {
    return this.httpClient.delete(environment.urlDeleteData + "DataSkill/" + `${id}`);
  }

}
