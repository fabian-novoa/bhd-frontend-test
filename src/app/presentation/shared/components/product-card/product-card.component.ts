import { Component, input, output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { Product, Account, CreditCard } from '@domain/models';
import { AmountPartsPipe, LastDigitsPipe } from '@shared/pipes';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardContent,
    AmountPartsPipe,
    LastDigitsPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
  clickable = input<boolean>(false);

  productClick = output<Product>();

  isAccount(product: Product): product is Account {
    return product.productType === 'AC';
  }

  isCreditCard(product: Product): product is CreditCard {
    return product.productType === 'TC';
  }

  getAccount(product: Product): Account | null {
    return this.isAccount(product) ? product : null;
  }

  getCreditCard(product: Product): CreditCard | null {
    return this.isCreditCard(product) ? product : null;
  }

  onCardClick(): void {
    if (this.clickable()) {
      this.productClick.emit(this.product());
    }
  }
}
