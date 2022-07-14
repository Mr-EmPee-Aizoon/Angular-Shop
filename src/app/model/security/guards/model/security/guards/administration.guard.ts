import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/model/security/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationGuard implements CanActivate {
  constructor(
    private userService:UserService,
    private router:Router
  ) {

  }

  canActivate():any {
    if(this.userService.getUser() != undefined) {
      return true;
    } else {
      this.router.navigateByUrl("/home/login");
    }
  }
  
}
