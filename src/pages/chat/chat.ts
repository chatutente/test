import { Component } from '@angular/core';
import {  ViewController,NavController,ModalController } from 'ionic-angular';
import { ChatpageComponent } from '../../components/chatpage/chatpage';


/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {}

    openchatpage() {

	 let modal = this.modalCtrl.create(ChatpageComponent);
     modal.present();

	}

  ionViewDidLoad() {
    console.log('Hello ChatPage Page');
  }

}
