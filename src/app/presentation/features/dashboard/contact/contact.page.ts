import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonContent
} from '@ionic/angular/standalone';
import { ScreenPlaceholderComponent } from '@shared/components';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonContent,
    ScreenPlaceholderComponent
  ]
})
export class ContactPage {}
