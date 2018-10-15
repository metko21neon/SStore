import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDatasourceService } from './rest-datasourse.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private datasource: RestDatasourceService) {}

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }
  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }
  clear() {
    this.datasource.auth_token = null;
  }
}
