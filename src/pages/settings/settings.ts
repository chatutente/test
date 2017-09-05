import { Component } from '@angular/core';
import { ViewController,NavController,ModalController} from 'ionic-angular';
import {PushnotificationsComponent} from '../../components/pushnotifications/pushnotifications';
import {DeleteaccountComponent} from '../../components/deleteaccount/deleteaccount';


/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }

      openpushnotifications() {

   let modal = this.modalCtrl.create(PushnotificationsComponent);
     modal.present();

}

   opendeleteaccount() {

   let modal = this.modalCtrl.create(DeleteaccountComponent);
     modal.present();

}



   closepushnotifications(){

      console.log('close post modal');
      
      this.viewCtrl.dismiss();
      
  }

}
