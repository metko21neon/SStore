import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {RestDatasourceService} from '../core/rest-datasourse.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from '../core/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private dataSource: RestDatasourceService,
              private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.dataSource.getToken()) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer<${this.dataSource.getToken()}>`),
      });
    }
    return next.handle(request);
  }
}
