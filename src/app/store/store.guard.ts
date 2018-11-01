import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StoreComponent } from './store/store.component';
import {AdminComponent} from '../admin/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class StoreGuard implements CanActivate {
  private firstNavigation = true;
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (next.component !== StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
