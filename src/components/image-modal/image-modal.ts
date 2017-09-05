import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';
/*
  Generated class for the ImageModal component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'image-modal',
  templateUrl: 'image-modal.html'
})
export class ImageModalComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello ImageModal Component');
    this.text = 'Hello World';
  }

    closeimage1(){

      console.log('close post modal');
      this.viewCtrl.dismiss();
  }


}
