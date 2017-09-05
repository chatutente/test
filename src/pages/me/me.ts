import { Component } from '@angular/core';
import { ViewController,NavController,ModalController,ActionSheetController  } from 'ionic-angular';

import {EditprofileComponent} from '../../components/editprofile/editprofile';
import {NotificationsComponent} from '../../components/notifications/notifications';
import {ViewsComponent} from '../../components/views/views';
import {FriendsComponent} from '../../components/friends/friends';
import {MatchesComponent} from '../../components/matches/matches';
import { FiltersComponent } from '../../components/filters/filters';
import { ProfileComponent } from '../../components/profile/profile';


@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController) {
  this.viewCtrl = viewCtrl;
  
  }

  ionViewDidLoad() {
    console.log('Hello MePage Page');
  }


   openeditprofile() {
   let modal = this.modalCtrl.create(EditprofileComponent);
   modal.present();
  }

   opennotification() {
   let modal = this.modalCtrl.create(NotificationsComponent);
   modal.present();
  }

   openviews() {
   let modal = this.modalCtrl.create(ViewsComponent);
   modal.present();
  }

  openfriends(){
   let modal = this.modalCtrl.create(FriendsComponent);
   modal.present();
  }

   openmatches(){
   let modal = this.modalCtrl.create(MatchesComponent);
   modal.present();
  }
  
   openfilters(){
   let modal = this.modalCtrl.create(FiltersComponent);
   modal.present();
  }

    openprofile() {
   let modal = this.modalCtrl.create(ProfileComponent);
     modal.present();
}


  photoactionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add Photo',
      buttons: [
        {
          text: 'Upload',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
