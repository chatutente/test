import { Component } from '@angular/core';

import { ViewController,NavController,ModalController} from 'ionic-angular';
import {ProfileComponent} from '../../components/profile/profile';


@Component({
  selector: 'page-meet',
  templateUrl: 'meet.html'
})
export class MeetPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello MeetPage Page');
  }

    openprofile() {

   let modal = this.modalCtrl.create(ProfileComponent);
     modal.present();

}

   closeprofile(){

      console.log('close post modal');
      
      this.viewCtrl.dismiss();
      
  }

}
