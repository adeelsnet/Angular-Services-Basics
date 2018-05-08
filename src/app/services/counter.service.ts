export class CounterService {
  activeUserCounter: number = 0;
  inactiveUserCounter: number = 0;

  userStatusCounter (userStatus: boolean) {
    if (!userStatus) {
      this.inactiveUserCounter += 1;
    } else {
      this.activeUserCounter += 1;
    }
  }
}
