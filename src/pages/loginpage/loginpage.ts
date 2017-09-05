import { Component } from '@angular/core';
import { ViewController,NavController,ModalController  } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/*
  Generated class for the Loginpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html'
})
export class LoginPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
  this.viewCtrl = viewCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

    opentabs() {

	  let modal = this.modalCtrl.create(TabsPage);
    modal.present();

	}

}
