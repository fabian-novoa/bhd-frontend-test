import { Component, inject } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonContent, IonButton, IonText
} from '@ionic/angular/standalone';
import { AuthFacade } from '@presentation/facades';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonButton,
    IonText
  ]
})
export class SettingsPage {
  private authFacade = inject(AuthFacade);

  onLogout(): void {
    this.authFacade.logout();
  }
}
