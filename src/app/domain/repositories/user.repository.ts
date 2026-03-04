import { Observable } from 'rxjs';
import { User } from '@domain/models';

export abstract class UserRepository {
  abstract getUser(): Observable<User>;
}
