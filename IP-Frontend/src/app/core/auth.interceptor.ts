import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthServiceHelper } from './auth-helper.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public authService: AuthServiceHelper,
              private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (request.url.search('/login') === -1) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getAccessToken()}`,
        },
      });
    }
    return next.handle(request).pipe(catchError(err => {
      console.log(err);
      if(err.status === 401 || err.status === 0){
        this.router.navigate(['login']);
      }
      const error = err.error.message || err.statusText;
        return throwError(error);
    }))
  }
}
