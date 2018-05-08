import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  inactiveUsers = [];
  activeUserCount;

  constructor (private usersService: UsersService,
               private counterService: CounterService) {}

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
  /* @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>(); */

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.activeUserCount = this.counterService.activeUserCounter;
  }
}
