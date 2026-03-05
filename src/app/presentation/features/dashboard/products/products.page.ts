import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonContent, IonSpinner, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonText
} from '@ionic/angular/standalone';
import { DashboardFacade } from '@presentation/facades';
import { CurrencyPipe } from '@shared/pipes';
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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    CurrencyPipe
  ]
})
export class ProductsPage implements OnInit {
  private dashboardFacade = inject(DashboardFacade);
  private router = inject(Router);

  readonly loading = this.dashboardFacade.loading;
  readonly accounts = this.dashboardFacade.accounts;
  readonly creditCards = this.dashboardFacade.creditCards;

  ngOnInit(): void {
    this.dashboardFacade.loadDashboardData();
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/dashboard/product-detail'], {
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
