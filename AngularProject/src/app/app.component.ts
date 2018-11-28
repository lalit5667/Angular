import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  loadedfeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBl0wOUzoRvWHxPvbaLiRhARp5PEOrzfg',
    authDomain: 'ng-angular-project-lalit.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}
