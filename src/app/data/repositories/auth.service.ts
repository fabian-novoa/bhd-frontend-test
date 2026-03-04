import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRepository } from '@domain/repositories';
import { AuthTokens, LoginRequest } from '@domain/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthRepository {
  private http = inject(HttpClient);
  private readonly TOKEN_KEY = 'bhd_access_token';
  private readonly REFRESH_TOKEN_KEY = 'bhd_refresh_token';

  login(credentials: LoginRequest): Observable<AuthTokens> {
    return this.http.post<AuthTokens>('/sign_in', credentials);
  }

  saveTokens(tokens: AuthTokens): void {
    localStorage.setItem(this.TOKEN_KEY, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, tokens.refresh_token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clearTokens(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
}
