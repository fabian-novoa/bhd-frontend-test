import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthRepository } from '@domain/repositories';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authRepository = inject(AuthRepository);
  const token = authRepository.getAccessToken();

  if (token && !req.url.includes('/sign_in')) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(clonedRequest);
  }

  return next(req);
};
