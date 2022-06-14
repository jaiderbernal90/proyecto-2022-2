import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.serverUrl;
  token: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  public login(body: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, body)
  }

  public register(body: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, body)
  }

  public refreshToken() {
    return this.http.get(`${this.apiUrl}/refresh`);
  }

  setterSettings = (res: any) => {
    this.cookieService.set(
      'token',
      res.token,
      environment.daysTokenExpire,
      '/');
    this.cookieService.set(
      'user',
      JSON.stringify(res.user),
      environment.daysTokenExpire,
      '/');
  }

  currentUser = () => {
    try {
      return (this.cookieService.get('user')) ? JSON.parse(this.cookieService.get('user')) : null;
    } catch (e) {
      return null
    }
  }

  public clear = () => {
    this.cookieService.delete('token', '/');
    this.cookieService.delete('user', '/');
  }

  public logout = () => new Promise((resolve, reject) => {
    try {
      this.clear();
      this.redirectLogin();
      resolve(true);
    } catch (e) {
      reject(false);
    }
  });

  tokenUser() {
    return this.cookieService.get('token') ?? null
  }

  redirectLogin = () => {
    this.router.navigate(['/','iniciar-sesion']);
  }

  checkSession = (redirect = true) => {
    return new Promise((resolve, reject) => {
      if (this.cookieService.check('token')) {
        resolve(true);
      } else {
        redirect ? this.redirectLogin() : null;
        this.clear();
        reject(false);
      }
    }
    );
  };
}