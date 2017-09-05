import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';


/*
  Generated class for the Pushnotifications component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'pushnotifications',
  templateUrl: 'pushnotifications.html'
})
export class PushnotificationsComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Pushnotifications Component');
    this.text = 'Hello World';
  }

    closepushnotifications(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

}
