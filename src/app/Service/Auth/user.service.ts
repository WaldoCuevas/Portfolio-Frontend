import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  //Metodos Get
  urlGetData = 'https://localhost:8080/api/get';

  public GetPersonalData(id:number):Observable<Object>{
    return this.httpClient.get<User>(this.urlGetData + 'PersonalData/' + `${id}`);
  }

  //Metodos Post
  urlPostData = 'https://localhost:8080/api/add';
  public AddPersonalData(user:User):Observable<User>{
    return this.httpClient.post<User>(this.urlPostData + 'PersonalData', user );
  }

  //Metodos Put
  urlPutData = 'https://localhost:8080/api/modify';
  public ModifyPersonalData(id:number, user:User):Observable<User>{
    return this.httpClient.put<User>(this.urlPutData + 'PersonalData', id, user );
  }

  //Metodos Delete
  urlDeleteData = 'https://localhost:8080/api/delete';
  public DeletePersonalData(id:number):Observable<Object>{
    return this.httpClient.delete(this.urlDeleteData + 'PersonalData/' + `${id}`);
  }

}
