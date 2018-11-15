import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  @Output() startEvent = new EventEmitter();
  timerToken;
  constructor() {}

  ngOnInit() {}

  onStart() {
    this.timerToken = setInterval(() => {
      this.startEvent.emit(this.count + 1);
      this.count += 1;
    }, 1000);
  }

  onStop() {
    clearInterval(this.timerToken);
  }
}
