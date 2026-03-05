import { mockInterceptor } from './mock.interceptor';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('mockInterceptor', () => {
  const mockNext: HttpHandlerFn = (req) => of(new HttpResponse({ status: 200, body: {} }));

  it('should return mock tokens for valid login credentials', (done) => {
    const req = new HttpRequest('POST', '/sign_in', {
      userId: '00100010321',
      password: '1234'
    });

    mockInterceptor(req, mockNext).subscribe(response => {
      expect(response).toBeInstanceOf(HttpResponse);
      const body = (response as HttpResponse<any>).body;
      expect(body.access_token).toBeTruthy();
      expect(body.refresh_token).toBeTruthy();
      done();
    });
  });

  it('should return mock user data', (done) => {
    const req = new HttpRequest('GET', '/user');

    mockInterceptor(req, mockNext).subscribe(response => {
      expect(response).toBeInstanceOf(HttpResponse);
      const body = (response as HttpResponse<any>).body;
      expect(body.name).toBe('José');
      expect(body.lastName).toBe('Pérez');
      done();
    });
  });
});
