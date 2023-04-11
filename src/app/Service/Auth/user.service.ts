import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/Auth/user';

// Variables de entorno
import { environment } from '../../../environments/environment';
import { Login } from 'src/app/Model/Auth/login';
import { JwtDto } from 'src/app/Model/Auth/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  //Metodos Get

  public GetPersonalData(): Observable<User> {
    return this.httpClient.get<User>(environment.urlGetData + 'PersonalData');
  }

  //Metodos Post

  public AddPersonalData(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.urlPostData + 'PersonalData', user);
  }

  login(login: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>('http://localhost:8080/api/' + 'login', Login);
  }

  //Metodos Put

  public ModifyPersonalData(user: User): Observable<Object> {
    return this.httpClient.put<User>(environment.urlPutData + 'PersonalData',user);
  }

  //Metodos Delete
  
  public DeletePersonalData(): Observable<any> {
    return this.httpClient.delete(environment.urlDeleteData + "PersonalData");
  }

}
