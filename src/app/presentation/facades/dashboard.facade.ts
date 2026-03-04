import { Injectable, inject, signal, computed } from '@angular/core';
import { catchError, forkJoin, of, tap } from 'rxjs';
import { GetUserUseCase, GetAccountsUseCase, GetCreditCardsUseCase } from '@domain/use-cases';
import { User, Account, CreditCard } from '@domain/models';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacade {
  private getUserUseCase = inject(GetUserUseCase);
  private getAccountsUseCase = inject(GetAccountsUseCase);
  private getCreditCardsUseCase = inject(GetCreditCardsUseCase);

  private loadingSignal = signal(false);
  private userSignal = signal<User | null>(null);
  private accountsSignal = signal<Account[]>([]);
  private creditCardsSignal = signal<CreditCard[]>([]);

  readonly loading = computed(() => this.loadingSignal());
  readonly user = computed(() => this.userSignal());
  readonly accounts = computed(() => this.accountsSignal());
  readonly creditCards = computed(() => this.creditCardsSignal());

  loadDashboardData(): void {
    this.loadingSignal.set(true);

    forkJoin({
      user: this.getUserUseCase.execute(),
      accounts: this.getAccountsUseCase.execute(),
      creditCards: this.getCreditCardsUseCase.execute()
    }).pipe(
      tap(({ user, accounts, creditCards }) => {
        this.userSignal.set(user);
        this.accountsSignal.set(accounts);
        this.creditCardsSignal.set(creditCards);
      }),
      catchError(error => {
        console.error('Error loading dashboard data:', error);
        return of(null);
      }),
      tap(() => this.loadingSignal.set(false))
    ).subscribe();
  }
}
