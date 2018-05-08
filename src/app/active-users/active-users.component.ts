import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers = [];
  inactiveUserCount;

  constructor (private usersService: UsersService,
               private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }

  /* @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>(); */

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.inactiveUserCount = this.counterService.inactiveUserCounter;
  }
}
