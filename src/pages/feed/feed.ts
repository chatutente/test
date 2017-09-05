import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';
import { CommentsComponent } from '../../components/comments/comments';
import { FeedpostComponent } from '../../components/feedpost/feedpost';
import { ProfileComponent } from '../../components/profile/profile';


/*
  Generated class for the Feed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {}

  opencomment() {

	  let modal = this.modalCtrl.create(CommentsComponent);
    modal.present();

	}

  openfeedpost() {

    let modal = this.modalCtrl.create(FeedpostComponent);
    modal.present();

  }

  openprofile() {
    let modal = this.modalCtrl.create(ProfileComponent);
    modal.present();
  }

  closefeedpost(){

      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('Hello FeedPage Page');
  }


}
