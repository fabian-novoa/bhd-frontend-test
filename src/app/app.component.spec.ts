import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardFacade } from '@presentation/facades/dashboard.facade';
import { AuthFacade } from '@presentation/facades/auth.facade';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let mockDashboardFacade: any;
  let mockAuthFacade: jasmine.SpyObj<AuthFacade>;

  beforeEach(async () => {
    mockDashboardFacade = {
      user: jasmine.createSpy('user').and.returnValue(null),
      loadUser: jasmine.createSpy('loadUser')
    };

    mockAuthFacade = jasmine.createSpyObj('AuthFacade', ['isAuthenticated', 'logout']);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: DashboardFacade, useValue: mockDashboardFacade },
        { provide: AuthFacade, useValue: mockAuthFacade }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have main menu items', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    expect(app.mainMenuItems.length).toBe(4);
    expect(app.mainMenuItems[0].title).toBe('Mis Productos');
  });

  it('should have secondary menu items (Contact and Branch)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    expect(app.secondaryMenuItems.length).toBe(2);
    expect(app.secondaryMenuItems[0].title).toBe('Contacto');
    expect(app.secondaryMenuItems[1].title).toBe('Sucursales');
  });

  it('should call authFacade.logout when onLogout is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    app.onLogout();
    
    expect(mockAuthFacade.logout).toHaveBeenCalled();
  });
});

