import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepository } from '@domain/repositories';
import { User } from '@domain/models';

export class GetUserUseCase {
  private userRepository = inject(UserRepository);

  execute(): Observable<User> {
    return this.userRepository.getUser();
  }
}
