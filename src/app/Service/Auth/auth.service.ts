import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from 'src/app/Model/Auth/nuevo-usuario';
import { Login } from 'src/app/Model/Auth/login';
import { JwtDto } from 'src/app/Model/Auth/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UrlAuth = 'http://localhost:8080/auth/';
  UrlUsuario = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) { }

  nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.UrlAuth + 'nuevo'}`, nuevoUsuario);
  }

  login(loginUsuario: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(`${this.UrlAuth + 'login'}`, loginUsuario);
  }

  getUsuario(nombreUsuario: String | null): Observable<NuevoUsuario> {
    return this.httpClient.get<NuevoUsuario>(`${this.UrlUsuario + 'usuario'}/${nombreUsuario}`);
  }

  //Metodo para obtener todos los productos
  obtenerListaDeUsuarios(): Observable<NuevoUsuario[]> {
    return this.httpClient.get<NuevoUsuario[]>(`${this.UrlUsuario + 'usuarios'}`);
  }

}
