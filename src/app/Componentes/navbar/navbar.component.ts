import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  isLogged = false;
  isAdmin = false;
  roles: string[];

  nombreUsuario: string | null;

  constructor(private tokenService: TokenService,private router: Router,) {}

  ngOnInit(): void {

  }

  public isLogin(): boolean {
    this.roles = this.tokenService.getAuthorities();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles.forEach((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      });
      return true;
    }
    return false;
  }

  cerrarSesion(): void {
    this.tokenService.logOut();
    this.isLogged = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }
}
