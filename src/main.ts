import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular, createAnimation } from '@ionic/angular/standalone';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { mockInterceptor, tokenInterceptor } from '@data/interceptors';
import { AuthRepository, UserRepository, ProductRepository } from '@domain/repositories';
import { AuthService, UserService, ProductService } from '@data/repositories';
import { LoginUseCase, LogoutUseCase, GetUserUseCase, GetAccountsUseCase, GetCreditCardsUseCase } from '@domain/use-cases';

const TRANSITION_DURATION = 300;

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ 
      mode: 'ios',
      animated: true,
      navAnimation: (baseEl: HTMLElement, opts?: any) => {
        const rootAnimation = createAnimation()
          .duration(TRANSITION_DURATION);

        const enteringAnimation = createAnimation()
          .addElement(opts.enteringEl)
          .duration(TRANSITION_DURATION)
          .beforeRemoveClass('ion-page-invisible');

        const leavingAnimation = createAnimation()
          .addElement(opts.leavingEl)
          .duration(TRANSITION_DURATION);

        if (opts.direction === 'forward') {
          enteringAnimation.fromTo('transform', 'translateX(100%)', 'translateX(0%)');
          leavingAnimation.fromTo('transform', 'translateX(0%)', 'translateX(-30%)');
        } else {
          enteringAnimation.fromTo('transform', 'translateX(-30%)', 'translateX(0%)');
          leavingAnimation.fromTo('transform', 'translateX(0%)', 'translateX(100%)');
        }

        return rootAnimation.addAnimation([enteringAnimation, leavingAnimation]);
      }
    }),
    provideAnimations(),
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
