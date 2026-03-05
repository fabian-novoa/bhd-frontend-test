import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
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
    IonBackButton,
    IonContent,
    ScreenPlaceholderComponent
  ]
})
export class ContactPage {
  constructor() {
    addIcons({ arrowBack });
  }
}
