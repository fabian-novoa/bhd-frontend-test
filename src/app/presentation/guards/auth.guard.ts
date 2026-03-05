import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthFacade } from '@presentation/facades/auth.facade';

/**
 * Auth Guard
 * 
 * Protects routes that require authentication.
 * Redirects to login if no valid token is present.
 */
export const authGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  const isAuthenticated = authFacade.isAuthenticated();

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
