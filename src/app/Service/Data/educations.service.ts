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

  //Metodos Get

  public getDataEducation(): Observable<Educations[]> {
    return this.httpClient.get<Educations[]>(environment.urlGetData + 'DataEducation');
  }

  //Metodos Post

  public addDataEducation(educations: Educations): Observable<Educations> {
    return this.httpClient.post<Educations>(environment.urlPostData + 'DataEducation',educations);
  }

  //Metodos Put

  public modifyDataEducation(id: number, educations: Educations): Observable<Educations> {
    return this.httpClient.put<Educations>(environment.urlPutData + 'DataEducation/' + `${id}`, educations);
  }

  //Metodos Delete
  
  public deleteDataEducation(id: number): Observable<any> {
    return this.httpClient.delete(environment.urlDeleteData + "DataEducation/" + `${id}`);
  }

}
