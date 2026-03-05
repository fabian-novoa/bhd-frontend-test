import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, delay, throwError } from 'rxjs';

const MOCK_DELAY = 800;

const VALID_CREDENTIALS = {
  userId: '00100010321',
  password: '1234'
};

const MOCK_RESPONSES: Record<string, any> = {
  '/sign_in': {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEwMDAxMDMyMSJ9.kPLjCmPJaw8jaOu0cEp4sXR0e52YRrj97OCGJaQGzA4',
    refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.dw8gT8j5mKQbY8dVK453_dRICvBSg2oAQYFfzO1rpoY'
  },
  '/user': {
    name: 'José',
    lastName: 'Pérez',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  '/accounts': [
    {
      alias: 'Cuenta de ahorros 1',
      number: '1234567890001',
      availableAmount: 100000,
      productType: 'AC'
    },
    {
      alias: 'Cuenta de ahorros 2',
      number: '1234567890002',
      availableAmount: 200000,
      productType: 'AC'
    }
  ],
  '/credit_cards': [
    {
      alias: 'Tarjeta de crédito 1',
      number: '0987 6543 2109 0001',
      availableAmountRD: 1000000,
      availableAmountUS: 1000,
      isInternational: true,
      productType: 'TC'
    },
    {
      alias: 'Tarjeta de crédito 2',
      number: '0987 6543 2109 0002',
      availableAmountRD: 2000000,
      availableAmountUS: 0,
      isInternational: false,
      productType: 'TC'
    }
  ]
};

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === '/sign_in') {
    const body = req.body as any;
    
    if (body?.userId === VALID_CREDENTIALS.userId && body?.password === VALID_CREDENTIALS.password) {
      const response = new HttpResponse({
        status: 200,
        body: MOCK_RESPONSES['/sign_in']
      });
      return of(response).pipe(delay(MOCK_DELAY));
    } else {
      const errorResponse = new HttpErrorResponse({
        error: { message: 'Usuario y/o contraseña incorrectos' },
        status: 401,
        statusText: 'Unauthorized'
      });
      return throwError(() => errorResponse).pipe(delay(MOCK_DELAY));
    }
  }

  const mockResponse = MOCK_RESPONSES[req.url];
  if (mockResponse) {
    const response = new HttpResponse({
      status: 200,
      body: mockResponse
    });

    return of(response).pipe(delay(MOCK_DELAY));
  }

  return next(req);
};
