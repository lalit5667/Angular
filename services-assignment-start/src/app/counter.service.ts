export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveChanges() {
    this.activeToInactiveCounter ++;
    console.log('Inactive to Active: ' + this.activeToInactiveCounter);
    }

    incrementInactiveChanges() {
      this.inactiveToActiveCounter ++;
      console.log('Active to Inactive: ' + this.inactiveToActiveCounter);

    }
}
