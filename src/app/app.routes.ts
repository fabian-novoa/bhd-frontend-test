import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./presentation/features/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./presentation/features/dashboard/dashboard.page').then((m) => m.DashboardPage),
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./presentation/features/dashboard/products/products.page').then((m) => m.ProductsPage),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./presentation/features/dashboard/transactions/transactions.page').then((m) => m.TransactionsPage),
      },
      {
        path: 'offers',
        loadComponent: () =>
          import('./presentation/features/dashboard/offers/offers.page').then((m) => m.OffersPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./presentation/features/dashboard/settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'product-detail',
        loadComponent: () =>
          import('./presentation/features/dashboard/product-detail/product-detail.page').then((m) => m.ProductDetailPage),
      },
    ],
  },
];
