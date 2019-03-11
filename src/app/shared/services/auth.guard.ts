import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from 'rxjs/Observable';
import {AuthServices} from "./auth.services";
import {Injectable} from "@angular/core";
import {User} from "../models/user.model";

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {


  constructor(private authService: AuthServices,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          accessDenied: true
        }
      });
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivateChild(childRoute, state);
  }

}
