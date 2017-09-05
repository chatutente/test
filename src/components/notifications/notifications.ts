import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';


/*
  Generated class for the Notifications component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Notifications Component');
    this.viewCtrl = viewCtrl;
  }

    closenotification(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

}
