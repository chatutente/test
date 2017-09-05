import { Component } from '@angular/core';
import {ViewController,ModalController} from 'ionic-angular';
import { ImageModalComponent } from '../../components/image-modal/image-modal';

/*
  Generated class for the Comments component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public modalCtrl: ModalController) {
    console.log('Hello Comments Component');
    this.viewCtrl = viewCtrl;
  }

  closecomment(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

  openimg() {

    let modal = this.modalCtrl.create(ImageModalComponent);
    modal.present();

  }
  

}
