import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, NavigationExtras} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../model/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.authenticated) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (this.auth.authenticated) { return true; }
    this.auth.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
