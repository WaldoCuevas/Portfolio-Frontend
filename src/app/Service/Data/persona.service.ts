import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/Model/Data/persona';

// Variables de entorno
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) {}

  api:string = "api/";

  //Metodos Get

  public getPersonalData(): Observable<Persona> {
    return this.httpClient.get<Persona>(environment.apiUrl + this.api + 'getPersonalData');
  }

  //Metodos Post

  public addPersonalData(persona: Persona): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + this.api + 'addPersonalData', persona);
  }

  //Metodos Put

  public modifyPersonalData(persona: Persona, id:number): Observable<Object> {
    return this.httpClient.put(environment.apiUrl + this.api + 'modifyPersonalData/' + `${id}`, persona);
  }

  //Metodos Delete
  
  public deletePersonalData(): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + this.api + "deletePersonalData");
  }

}
