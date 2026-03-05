import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonContent, IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonText
  ]
})
export class OffersPage {}
