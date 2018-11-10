import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.highlighted {color: white}']
})
export class AppComponent {
  display = false;
  clicksArray = [];
  setDisplay(event: Event) {
    this.display = this.display === false ? true : false;
    this.clicksArray.push(event.timeStamp);
    console.log(event);
  }
}
