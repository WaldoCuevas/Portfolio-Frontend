import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educations } from 'src/app/Model/Data/educations';

// Variables de entorno
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  constructor(private httpClient:HttpClient) { }

  api:string = "api/";

  //Metodos Get

  public getDataEducation(id:number): Observable<Educations> {
    return this.httpClient.get<Educations>(environment.apiUrl + this.api + 'getDataEducation/' + `${id}`);
  }

  public getAllDataEducation(): Observable<Educations[]> {
    return this.httpClient.get<Educations[]>(environment.apiUrl + this.api + 'getAllDataEducation');
  }

  //Metodos Post

  public addDataEducation(educations: Educations): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + this.api + 'addDataEducation',educations);
  }

  //Metodos Put

  public modifyDataEducation(id: number, educations: Educations): Observable<Object> {
    return this.httpClient.put(environment.apiUrl + this.api + 'modifyDataEducation/' + `${id}`, educations);
  }

  //Metodos Delete
  
  public deleteDataEducation(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + this.api + "deleteDataEducation/" + `${id}`);
  }

}
