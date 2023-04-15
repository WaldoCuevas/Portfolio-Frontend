import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/Service/Auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  realRol:string;

  constructor(private tokenService:TokenService , private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //roles esperados -> admin O user
    const expectedRol =  route.data['expectedRol'];

    //mis roles guardados -> por lo general estan vacios
    const roles = this.tokenService.getAuthorities();

    // mi rol -> user
    this.realRol = 'user'; 

    roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.realRol = 'admin'; 
      }
    });
      if (!this.tokenService.getToken || expectedRol.indexOf(this.realRol) < 0){
        
        alert("No Authorizate");
        this.router.navigate(['/']);
        return false;
        
      }
      
    return true;

  }

  
  
}
