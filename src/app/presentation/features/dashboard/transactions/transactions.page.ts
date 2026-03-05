import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonContent, IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
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
export class TransactionsPage {}
