import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private counterService: CounterService) {}
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementInactiveChanges();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementActiveChanges();
  }
}
