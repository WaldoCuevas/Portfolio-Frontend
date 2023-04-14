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

  //Metodos Get

  public getDataWork(): Observable<ExpWork[]> {
    return this.httpClient.get<ExpWork[]>(environment.urlGetData + 'DataWork');
  }

  //Metodos Post

  public addDataWork(ExpWork: ExpWork): Observable<ExpWork> {
    return this.httpClient.post<ExpWork>(environment.urlPostData + 'DataWork',ExpWork);
  }

  //Metodos Put

  public modifyDataWork(id: number, ExpWork: ExpWork): Observable<ExpWork> {
    return this.httpClient.put<ExpWork>(environment.urlPutData + 'DataWork/' + `${id}`, ExpWork);
  }

  //Metodos Delete
  
  public deleteDataWork(id: number): Observable<any> {
    return this.httpClient.delete(environment.urlDeleteData + "DataWork/" + `${id}`);
  }

}
