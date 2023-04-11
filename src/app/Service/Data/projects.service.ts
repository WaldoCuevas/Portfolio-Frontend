import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/Model/projects';

// Variables de entorno
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  //Metodos Get

  public getDataProject(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(environment.urlGetData + 'DataProject');
  }

  //Metodos Post

  public addDataProject(projects: Projects): Observable<Projects> {
    return this.httpClient.post<Projects>(environment.urlPostData + 'DataProject',projects);
  }

  //Metodos Put

  public modifyDataProject(id: number, projects: Projects): Observable<Projects> {
    return this.httpClient.put<Projects>(environment.urlPutData + 'DataProject/' + `${id}`, projects);
  }

  //Metodos Delete
  
  public deleteDataProject(id: number): Observable<any> {
    return this.httpClient.delete(environment.urlDeleteData + "DataProject/" + `${id}`);
  }

}
