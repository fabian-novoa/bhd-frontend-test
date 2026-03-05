
import { Component, inject, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { walletOutline, swapHorizontalOutline, pricetagOutline, settingsOutline, callOutline, businessOutline, logOutOutline } from 'ionicons/icons';
import { DashboardFacade, AuthFacade } from '@presentation/facades';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonAvatar],
})
export class AppComponent {
  private dashboardFacade = inject(DashboardFacade);
  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  readonly user = this.dashboardFacade.user;
  readonly fullName = computed(() => {
    const u = this.user();
    return u ? `${u.name} ${u.lastName}` : '';
  });

  public mainMenuItems = [
    { title: 'Mis Productos', url: '/dashboard/products', icon: 'wallet-outline' },
    { title: 'Transacciones', url: '/dashboard/transactions', icon: 'swap-horizontal-outline' },
    { title: 'Ofertas', url: '/dashboard/offers', icon: 'pricetag-outline' },
    { title: 'Configuración', url: '/dashboard/settings', icon: 'settings-outline' },
  ];

  public secondaryMenuItems = [
    { title: 'Contacto', url: '#', icon: 'call-outline' },
    { title: 'Sucursales', url: '#', icon: 'business-outline' },
  ];

  constructor() {
    addIcons({ walletOutline, swapHorizontalOutline, pricetagOutline, settingsOutline, callOutline, businessOutline, logOutOutline });
  }

  onLogout(): void {
    this.authFacade.logout();
  }

  isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }

  isAuthenticated(): boolean {
    return !this.isLoginPage();
  }
}

