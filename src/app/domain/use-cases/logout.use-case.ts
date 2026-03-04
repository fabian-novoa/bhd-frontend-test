import { inject } from '@angular/core';
import { AuthRepository } from '@domain/repositories';

export class LogoutUseCase {
  private authRepository = inject(AuthRepository);

  execute(): void {
    this.authRepository.clearTokens();
  }
}
