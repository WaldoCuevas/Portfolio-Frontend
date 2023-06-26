import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/Model/Data/projects';

// Variables de entorno
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  api:string = "api/";

  //Metodos Get

  public getDataProject(id:number): Observable<Projects> {
    return this.httpClient.get<Projects>(environment.apiUrl + this.api + 'getDataProject/' + `${id}`);
  }

  public getAllDataProject(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(environment.apiUrl + this.api + 'getAllDataProject');
  }

  //Metodos Post

  public addDataProject(projects: Projects): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + this.api + 'addDataProject',projects);
  }

  //Metodos Put

  public modifyDataProject(id: number, projects: Projects): Observable<Object> {
    return this.httpClient.put(environment.apiUrl + this.api + 'modifyDataProject/' + `${id}`, projects);
  }

  //Metodos Delete
  
  public deleteDataProject(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + this.api + "deleteDataProject/" + `${id}`);
  }

}
