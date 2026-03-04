import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { AuthFacade } from '@presentation/facades';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ]
})
export class DashboardPage implements OnInit {
  private authFacade = inject(AuthFacade);

  ngOnInit(): void {
    console.log('Dashboard loaded successfully');
  }

  onLogout(): void {
    this.authFacade.logout();
  }
}
