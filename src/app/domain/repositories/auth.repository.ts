import { Observable } from 'rxjs';
import { AuthTokens, LoginRequest } from '@domain/models';

export abstract class AuthRepository {
  abstract login(credentials: LoginRequest): Observable<AuthTokens>;
  abstract saveTokens(tokens: AuthTokens): void;
  abstract getAccessToken(): string | null;
  abstract clearTokens(): void;
}
