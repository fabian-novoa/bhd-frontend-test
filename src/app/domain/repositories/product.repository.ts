import { Observable } from 'rxjs';
import { Account, CreditCard } from '@domain/models';

export abstract class ProductRepository {
  abstract getAccounts(): Observable<Account[]>;
  abstract getCreditCards(): Observable<CreditCard[]>;
}
