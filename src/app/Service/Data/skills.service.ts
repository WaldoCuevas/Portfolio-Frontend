import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/Model/Data/skills';

// Variables de entorno
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient:HttpClient) { }

  api:string = "api/";

  //Metodos Get

  public getDataSkill(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(environment.apiUrl + this.api + 'getDataSkill');
  }
  //Metodos Post

  public addDataSkill(skills: Skills): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + this.api + 'addDataSkill',skills);
  }

  //Metodos Put

  public modifyDataSkill(id: number, skills: Skills): Observable<Object> {
    return this.httpClient.put(environment.apiUrl + this.api + 'modifyDataSkill/' + `${id}`, skills);
  }

  //Metodos Delete
  
  public deleteDataSkill(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + this.api + "deleteDataSkill/" + `${id}`);
  }

}
