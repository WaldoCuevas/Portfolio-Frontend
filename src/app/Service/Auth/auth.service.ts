import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from 'src/app/Model/Auth/nuevo-usuario';
import { Login } from 'src/app/Model/Auth/login';
import { JwtDto } from 'src/app/Model/Auth/jwt-dto';

// Variables de entorno
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth:string = "auth/";

  constructor(private httpClient: HttpClient) { }

  nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl + this.auth + 'nuevo'}`, nuevoUsuario);
  }

  login(loginUsuario: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(`${environment.apiUrl + this.auth + 'login'}`, loginUsuario);
  }

}
