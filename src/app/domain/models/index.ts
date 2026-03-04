export interface LoginRequest {
  userId: string;
  password: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export interface User {
  name: string;
  lastName: string;
  photo: string;
}

export interface Account {
  alias: string;
  number: string;
  availableAmount: number;
  productType: 'AC';
}

export interface CreditCard {
  alias: string;
  number: string;
  availableAmountRD: number;
  availableAmountUS: number;
  isInternational: boolean;
  productType: 'TC';
}

export type Product = Account | CreditCard;
