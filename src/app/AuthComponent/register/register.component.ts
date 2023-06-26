import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/Model/Auth/nuevo-usuario';
import { AuthService } from 'src/app/Service/Auth/auth.service';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  //Object Instance
  usuario: NuevoUsuario;

  //var
  isLogged = false;
  public form: FormGroup;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //form
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });


    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }

  }

  SaveUser() {
    this.usuario = this.form.value;
    this.authService.nuevo(this.usuario).subscribe({
      next: (data) => {
        this.GoToListUser();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  GoToListUser() {
    this.router.navigate(['/login']);
  }
  
}
