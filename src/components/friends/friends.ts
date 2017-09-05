import { Component } from '@angular/core';

import { ViewController,NavController,ModalController } from 'ionic-angular';


/*
  Generated class for the Friends component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'friends',
  templateUrl: 'friends.html'
})
export class FriendsComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Friends Component');
    this.text = 'Hello World';
  }

closefriends(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

}
