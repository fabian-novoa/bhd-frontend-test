import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepository } from '@domain/repositories';
import { Account } from '@domain/models';

export class GetAccountsUseCase {
  private productRepository = inject(ProductRepository);

  execute(): Observable<Account[]> {
    return this.productRepository.getAccounts();
  }
}
