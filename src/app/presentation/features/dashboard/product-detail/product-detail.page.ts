import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ViewWillEnter } from '@ionic/angular/standalone';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Product } from '@domain/models';
import { ProductCardComponent, ScreenPlaceholderComponent } from '@shared/components';

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
    ProductCardComponent,
    ScreenPlaceholderComponent
  ]
})
export class ProductDetailPage implements OnInit, ViewWillEnter {
  private router = inject(Router);
  private navCtrl = inject(NavController);

  product: Product | null = null;

  constructor() {
    addIcons({ arrowBack });
  }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.product = navigation.extras.state['product'];
    }

    if (!this.product) {
      this.goBack();
    }
  }

  ionViewWillEnter(): void {
    if (!this.product) {
      this.goBack();
    }
  }

  goBack(): void {
    this.navCtrl.back();
  }
}
