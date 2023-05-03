import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/Model/Data/persona';

// Variables de entorno
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) {}

  api:string = "api";

  //Metodos Get

  public GetPersonalData(): Observable<Persona> {
    return this.httpClient.get<Persona>(environment.apiUrl + this.api + 'GetPersonalData');
  }

  //Metodos Post

  public AddPersonalData(persona: Persona): Observable<Object> {
    return this.httpClient.post(environment.apiUrl + this.api + 'AddPersonalData', persona);
  }

  //Metodos Put

  public ModifyPersonalData(persona: Persona, id:number): Observable<Object> {
    return this.httpClient.put(environment.apiUrl + this.api + 'ModifyPersonalData/' + `${id}`, persona);
  }

  //Metodos Delete
  
  public DeletePersonalData(): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + this.api + "DeletePersonalData");
  }

}
