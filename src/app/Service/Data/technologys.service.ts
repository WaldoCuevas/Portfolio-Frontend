import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technologys } from 'src/app/Model/Data/technologys';

// Variables de entorno
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologysService {

  constructor(private httpClient:HttpClient) { }

  //Metodos Get

  public getDataTechnology(): Observable<Technologys[]> {
    return this.httpClient.get<Technologys[]>(environment.urlGetData + 'DataTechnology');
  }

  //Metodos Post

  public addDataTechnology(technologys: Technologys): Observable<Object> {
    return this.httpClient.post(environment.urlPostData + 'DataTechnology',technologys);
  }

  //Metodos Put

  public modifyDataTechnology(id: number, technologys: Technologys): Observable<Object> {
    return this.httpClient.put(environment.urlPutData + 'DataTechnology/' + `${id}`, technologys);
  }

  //Metodos Delete
  
  public deleteDataTechnology(id: number): Observable<any> {
    return this.httpClient.delete(environment.urlDeleteData + "DataTechnology/" + `${id}`);
  }

}
