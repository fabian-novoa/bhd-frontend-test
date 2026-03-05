import { Component, inject, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { walletOutline, swapHorizontalOutline, pricetagOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ]
})
export class DashboardPage implements OnInit {
  constructor() {
    addIcons({ walletOutline, swapHorizontalOutline, pricetagOutline, settingsOutline });
  }

  ngOnInit(): void {
    console.log('Dashboard initialized');
  }
}
