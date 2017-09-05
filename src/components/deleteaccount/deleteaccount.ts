import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';


/*
  Generated class for the Deleteaccount component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'deleteaccount',
  templateUrl: 'deleteaccount.html'
})
export class DeleteaccountComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Deleteaccount Component');
    this.text = 'Hello World';
  }

      closeaccount(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

}
