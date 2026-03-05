import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { ScreenPlaceholderComponent } from '@shared/components';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
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
export class BranchPage {
  constructor() {
    addIcons({ arrowBack });
  }
}
