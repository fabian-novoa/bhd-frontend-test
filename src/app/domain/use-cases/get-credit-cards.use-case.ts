import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepository } from '@domain/repositories';
import { CreditCard } from '@domain/models';

export class GetCreditCardsUseCase {
  private productRepository = inject(ProductRepository);

  execute(): Observable<CreditCard[]> {
    return this.productRepository.getCreditCards();
  }
}
