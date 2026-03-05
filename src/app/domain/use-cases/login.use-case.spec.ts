import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoginUseCase } from './login.use-case';
import { AuthRepository } from '@domain/repositories';
import { LoginRequest, AuthTokens } from '@domain/models';

describe('LoginUseCase', () => {
  let useCase: LoginUseCase;
  let mockAuthRepository: jasmine.SpyObj<AuthRepository>;

  beforeEach(() => {
    mockAuthRepository = jasmine.createSpyObj('AuthRepository', ['login', 'saveTokens']);

    TestBed.configureTestingModule({
      providers: [
        LoginUseCase,
        { provide: AuthRepository, useValue: mockAuthRepository }
      ]
    });

    useCase = TestBed.inject(LoginUseCase);
  });

  it('should call repository login and save tokens', (done) => {
    const credentials: LoginRequest = { userId: 'user123', password: 'pass123' };
    const mockTokens: AuthTokens = {
      access_token: 'token123',
      refresh_token: 'refresh123'
    };

    mockAuthRepository.login.and.returnValue(of(mockTokens));

    useCase.execute(credentials).subscribe(tokens => {
      expect(tokens).toEqual(mockTokens);
      expect(mockAuthRepository.login).toHaveBeenCalledWith(credentials);
      expect(mockAuthRepository.saveTokens).toHaveBeenCalledWith(mockTokens);
      done();
    });
  });
});
