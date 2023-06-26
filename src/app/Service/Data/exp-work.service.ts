import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpWork } from 'src/app/Model/Data/exp-work';

// Variables de entorno
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExpWorkService {

  constructor(private httpClient:HttpClient) { }

  api:string = "api/";

  //Metodos Get 

  public getDataWork(id:number): Observable<ExpWork> {
    return this.httpClient.get<ExpWork>(environment.apiUrl + this.api + 'getDataWork/' + `${id}`);
  }

  public getAllDataWork(): Observable<ExpWork[]> {
    return this.httpClient.get<ExpWork[]>(environment.apiUrl + this.api + 'getAllDataWork');
  }

  //Metodos Post

  public addDataWork(ExpWork: ExpWork): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + this.api + 'addDataWork',ExpWork);
  }

  //Metodos Put

  public modifyDataWork(id: number, ExpWork: ExpWork): Observable<Object> {
    return this.httpClient.put(environment.apiUrl + this.api + 'modifyDataWork/' + `${id}`, ExpWork);
  }

  //Metodos Delete
  
  public deleteDataWork(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + this.api + "deleteDataWork/" + `${id}`);
  }

}
