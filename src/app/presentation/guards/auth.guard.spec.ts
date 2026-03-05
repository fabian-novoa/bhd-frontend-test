import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthFacade } from '@presentation/facades/auth.facade';

describe('authGuard', () => {
  let mockAuthFacade: jasmine.SpyObj<AuthFacade>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockRoute: ActivatedRouteSnapshot;
  let mockState: RouterStateSnapshot;

  beforeEach(() => {
    mockAuthFacade = jasmine.createSpyObj('AuthFacade', ['isAuthenticated']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRoute = {} as ActivatedRouteSnapshot;
    mockState = { url: '/dashboard' } as RouterStateSnapshot;

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthFacade, useValue: mockAuthFacade },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should allow access when user is authenticated', () => {
    mockAuthFacade.isAuthenticated.and.returnValue(true);

    const result = TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));

    expect(result).toBe(true);
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to login when user is not authenticated', () => {
    mockAuthFacade.isAuthenticated.and.returnValue(false);

    const result = TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));

    expect(result).toBe(false);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
