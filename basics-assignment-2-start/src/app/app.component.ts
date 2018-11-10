import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';

  allowResetFunction(){

    if(this.userName==''){
      return true;
    }
    else{
      return false;
    }
    
  }

  onClickReset(){
    this.userName = "";
  }

}
