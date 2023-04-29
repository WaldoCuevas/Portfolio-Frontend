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

  //Metodos Get

  public GetPersonalData(): Observable<Persona> {
    return this.httpClient.get<Persona>(environment.urlGetData + 'PersonalData');
  }

  //Metodos Post

  public AddPersonalData(persona: Persona): Observable<Object> {
    return this.httpClient.post(environment.urlPostData + 'PersonalData', persona);
  }

  //Metodos Put

  public ModifyPersonalData(persona: Persona, id:number): Observable<Object> {
    return this.httpClient.put(environment.urlPutData + 'PersonalData/' + `${id}`, persona);
  }

  //Metodos Delete
  
  public DeletePersonalData(): Observable<any> {
    return this.httpClient.delete(environment.urlDeleteData + "PersonalData");
  }

}
