import { Component, inject, OnInit } from '@angular/core';
import { NavController, ViewWillEnter, ViewDidEnter } from '@ionic/angular/standalone';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonContent, IonSpinner
} from '@ionic/angular/standalone';
import { DashboardFacade } from '@presentation/facades';
import { ProductCardComponent, ScreenPlaceholderComponent } from '@shared/components';
import { Product } from '@domain/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonSpinner,
    ProductCardComponent,
    ScreenPlaceholderComponent
  ]
})
export class ProductsPage implements OnInit {
  private dashboardFacade = inject(DashboardFacade);
  private navCtrl = inject(NavController);

  readonly loading = this.dashboardFacade.loading;
  readonly accounts = this.dashboardFacade.accounts;
  readonly creditCards = this.dashboardFacade.creditCards;

  ngOnInit(): void {
    this.dashboardFacade.loadDashboardData();
  }

  async onProductClick(product: Product): Promise<void> {
    await this.navCtrl.navigateForward('/product-detail', {
      state: { product }
    });
  }

  isAccount(product: Product): boolean {
    return product.productType === 'AC';
  }

  isCreditCard(product: Product): boolean {
    return product.productType === 'TC';
  }
}
