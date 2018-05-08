import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  activeUsers = ['John', 'Steve'];
  inactiveUsers = ['Sameul', 'Rosie'];

  constructor (private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.userStatusCounter(false);

  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.userStatusCounter(true);

  }

}
