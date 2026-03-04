import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRepository } from '@domain/repositories';
import { User } from '@domain/models';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserRepository {
  private http = inject(HttpClient);

  getUser(): Observable<User> {
    return this.http.get<User>('/user');
  }
}
