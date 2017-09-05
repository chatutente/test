import { Component } from '@angular/core';
import {ViewController,ModalController} from 'ionic-angular';

/*
  Generated class for the Chatpage component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'chatpage',
  templateUrl: 'chatpage.html'
})
export class ChatpageComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public modalCtrl: ModalController) {
    console.log('Hello Chatpage Component');

    this.viewCtrl = viewCtrl;
  }

     closechatpage(){

      console.log('close post modal');
      
      this.viewCtrl.dismiss();
      
  }

}
