import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDatasourceService } from './rest-datasourse.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl: string;
  constructor(private datasource: RestDatasourceService,
              private router: Router) {}

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }
  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }
  clear() {
    this.datasource.auth_token = null;
    this.router.navigateByUrl('/store');
  }
}
