import { Component } from '@angular/core';
import {ViewController,ModalController} from 'ionic-angular';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {

  text: string;
  type: string;
  constructor(public viewCtrl: ViewController,public modalCtrl: ModalController) {
    console.log('Hello Profile Component');

  this.type="basicinfo";
  
  }

     closeprofile(){

      console.log('close post modal');
      
      this.viewCtrl.dismiss();
      
  }

}
