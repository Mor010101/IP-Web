import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/api/services';
import { UserLoginDto, UserTokens } from 'src/api/models';
import { Observable, Subject } from 'rxjs';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceHelper {
  private userLogin: UserLoginDto = { email: '', password: '' };

  constructor(private http: HttpClient, private authService: AuthService) {}

  login(username: string, password: string): Observable<UserTokens>{
    this.userLogin.email = username;
    this.userLogin.password = password;
    var subject = new Subject<UserTokens>();

    this.authService.apiAuthPost$Json({body: this.userLogin}).subscribe((res) => {
      localStorage.setItem('access_token', res.token as string);
      subject.next(res);
    });
    return subject.asObservable();
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
}
