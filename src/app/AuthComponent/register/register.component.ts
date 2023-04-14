import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/Model/Auth/nuevo-usuario';
import { AuthService } from 'src/app/Service/Auth/auth.service';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: NuevoUsuario = new NuevoUsuario();

  isLogged = false;

  constructor(private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }

  }

  guardarUsuario() {
    this.authService.nuevo(this.usuario).subscribe(
      {
        next: (data) => {
          this.goToListaUsuarios();
        }, error: (err) => {
          console.log(err);
        }
      });
  }

  goToListaUsuarios() {
    this.router.navigate(['/iniciar-sesion'])
  }

  onSubmit() {
    this.guardarUsuario();
  }

}
