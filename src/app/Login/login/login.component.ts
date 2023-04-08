import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Auth/login';
import { TokenService } from 'src/app/Service/Auth/token.service';
import { UserService } from 'src/app/Service/Auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged:Boolean;
  
  login: Login;

  username: string;
  password: string

  constructor(private router: Router,
    private tokenService: TokenService,
    private userService:UserService) { }


  ngOnInit() {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }

  }

  //onLogin
  iniciarSesion() {
    this.login = new Login(this.username, this.password);
    this.userService.login(this.login).subscribe({
      next: (data:any) => {
        this.tokenService.setToken(data.token);
        //this.tokenService.setUserName(data.nombreUsuario);
        //this.tokenService.setAuthorities(data.authorities);
        //this.roles = data.authorities;
        this.router.navigate(['/index']);
      }, error: err => {
        this.isLogged = false;
      }
    });
  }


}
