import { Component } from '@angular/core';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  isLogged = false;
  isAdmin = false;
  roles: string[];

  constructor(private tokenService: TokenService) {}

  NgOnInit(): void {
    this.Admin();
  }

  //Method for admin rol
  public Admin(): void {
    
    this.roles = this.tokenService.getAuthorities();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles.forEach((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      });
    }
  }


}
