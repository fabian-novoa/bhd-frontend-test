import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { mockInterceptor, tokenInterceptor } from '@data/interceptors';
import { AuthRepository, UserRepository, ProductRepository } from '@domain/repositories';
import { AuthService, UserService, ProductService } from '@data/repositories';
import { LoginUseCase, LogoutUseCase, GetUserUseCase, GetAccountsUseCase, GetCreditCardsUseCase } from '@domain/use-cases';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(
      withInterceptors([mockInterceptor, tokenInterceptor])
    ),
    { provide: AuthRepository, useClass: AuthService },
    { provide: UserRepository, useClass: UserService },
    { provide: ProductRepository, useClass: ProductService },
    LoginUseCase,
    LogoutUseCase,
    GetUserUseCase,
    GetAccountsUseCase,
    GetCreditCardsUseCase,
  ],
});
