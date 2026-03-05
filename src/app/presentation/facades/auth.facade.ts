import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, of, tap } from 'rxjs';
import { LoginUseCase, LogoutUseCase } from '@domain/use-cases';
import { LoginRequest } from '@domain/models';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  private router = inject(Router);
  private loginUseCase = inject(LoginUseCase);
  private logoutUseCase = inject(LogoutUseCase);

  private loadingSignal = signal(false);
  private errorSignal = signal<string | null>(null);
  private errorTimeout?: ReturnType<typeof setTimeout>;

  readonly loading = computed(() => this.loadingSignal());
  readonly error = computed(() => this.errorSignal());

  login(credentials: LoginRequest): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.clearErrorTimeout();

    this.loginUseCase.execute(credentials).pipe(
      tap(() => {
        this.router.navigate(['/dashboard']);
      }),
      catchError(() => {
        this.errorSignal.set('Usuario y/o contraseña incorrectos');
        this.startErrorTimeout();
        return of(null);
      }),
      finalize(() => this.loadingSignal.set(false))
    ).subscribe();
  }

  logout(): void {
    this.logoutUseCase.execute();
    this.router.navigate(['/login']);
  }

  clearError(): void {
    this.errorSignal.set(null);
    this.clearErrorTimeout();
  }

  private startErrorTimeout(): void {
    this.errorTimeout = setTimeout(() => {
      this.errorSignal.set(null);
    }, 3000);
  }

  private clearErrorTimeout(): void {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
      this.errorTimeout = undefined;
    }
  }
}
