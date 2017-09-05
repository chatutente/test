import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';


/*
  Generated class for the Feedpost component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'feedpost',
  templateUrl: 'feedpost.html'
})
export class FeedpostComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Feedpost Component');
    this.text = 'Hello World';
  }

      closefeedpost(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

}
