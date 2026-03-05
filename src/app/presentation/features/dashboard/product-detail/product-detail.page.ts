import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonText
} from '@ionic/angular/standalone';
import { Product } from '@domain/models';
import { CurrencyPipe } from '@shared/pipes';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    CurrencyPipe
  ]
})
export class ProductDetailPage {
  private router = inject(Router);
  private location = inject(Location);

  product: Product | null = null;

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.product = navigation.extras.state['product'];
    }

    if (!this.product) {
      this.location.back();
    }
  }

  isAccount(): boolean {
    return this.product?.productType === 'AC';
  }

  isCreditCard(): boolean {
    return this.product?.productType === 'TC';
  }

  get account() {
    return this.isAccount() ? this.product as any : null;
  }

  get creditCard() {
    return this.isCreditCard() ? this.product as any : null;
  }
}
