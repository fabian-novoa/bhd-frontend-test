import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepository } from '@domain/repositories';
import { Account, CreditCard } from '@domain/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ProductRepository {
  private http = inject(HttpClient);

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('/accounts');
  }

  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>('/credit_cards');
  }
}
