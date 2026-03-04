import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthRepository } from '@domain/repositories';
import { AuthTokens, LoginRequest } from '@domain/models';

export class LoginUseCase {
  private authRepository = inject(AuthRepository);

  execute(credentials: LoginRequest): Observable<AuthTokens> {
    return this.authRepository.login(credentials).pipe(
      tap(tokens => this.authRepository.saveTokens(tokens))
    );
  }
}
