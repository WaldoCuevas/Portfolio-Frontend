import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Auth/login';
import { AuthService } from 'src/app/Service/Auth/auth.service';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { PersonaService } from 'src/app/Service/Data/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  //var
  isLogged: Boolean;
  login: Login;
  roles: string[] = [];
  public form: FormGroup;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private personaService: PersonaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    //form
    this.form = this.formBuilder.group({
      nombreUsuario: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })

    // user token
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  //onLogin
  onLogin() {
    this.login = this.form.value;
    this.authService.login(this.login).subscribe({
      next: (data: any) => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isLogged = false;
      },
    });
  }

}
