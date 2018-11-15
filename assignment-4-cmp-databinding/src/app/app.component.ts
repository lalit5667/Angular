import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddOrEven: string;
  oddCounter = 0;
  evenCounter = 0;
  count: number;
  createOddOrEven(count: number) {
    this.count = count;
    this.oddOrEven = count % 2 === 0 ? 'Even' : 'Odd';
    if (this.oddOrEven === 'Odd') {
      this.oddCounter += 1;
    } else {
      this.evenCounter += 1;
    }
  }
}
