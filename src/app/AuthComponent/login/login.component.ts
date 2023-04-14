import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Auth/login';
import { AuthService } from 'src/app/Service/Auth/auth.service';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged: Boolean;

  login: Login;

  nombreUsuario: string;
  password: string;

  roles: string[] = [];

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  //onLogin
  iniciarSesion() {
    this.login = new Login(this.nombreUsuario, this.password);
    this.authService.login(this.login).subscribe({
      next: (data: any) => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/hero']);
      },
      error: (err) => {
        this.isLogged = false;
      },
    });
  }
}
