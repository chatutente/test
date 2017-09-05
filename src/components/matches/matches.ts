import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';


/*
  Generated class for the Matches component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'matches',
  templateUrl: 'matches.html'
})
export class MatchesComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Matches Component');
    this.text = 'Hello World';
  }
closematches(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }
}
