import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel
  ]
})
export class DashboardPage implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    console.log('Dashboard initialized');
  }

  isTabSelected(tab: string): boolean {
    const url = this.router.url;
    switch (tab) {
      case 'products': return url.includes('/dashboard/products') && !url.includes('/product-detail');
      case 'transactions': return url.includes('/dashboard/transactions');
      case 'offers': return url.includes('/dashboard/offers');
      case 'settings': return url.includes('/dashboard/settings');
      default: return false;
    }
  }
}
