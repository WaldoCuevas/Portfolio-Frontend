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

  api:string = "api/";

  //Metodos Get

  public getDataTechnology(id:number): Observable<Technologys> {
    return this.httpClient.get<Technologys>(environment.apiUrl + this.api + 'getDataTechnology/' + `${id}`);
  }

  public getAllDataTechnology(): Observable<Technologys[]> {
    return this.httpClient.get<Technologys[]>(environment.apiUrl + this.api + 'getAllDataTechnology');
  }

  //Metodos Post

  public addDataTechnology(technologys: Technologys): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + this.api + 'addDataTechnology',technologys);
  }

  //Metodos Put

  public modifyDataTechnology(id: number, technologys: Technologys): Observable<Object> {
    return this.httpClient.put(environment.apiUrl + this.api + 'modifyDataTechnology/' + `${id}`, technologys);
  }

  //Metodos Delete
  
  public deleteDataTechnology(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + this.api + "deleteDataTechnology/" + `${id}`);
  }

}
