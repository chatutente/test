import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';




@Component({
  selector: 'editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofileComponent {

  text: string;
  type : string;

  constructor(public viewCtrl: ViewController,public modalCtrl: ModalController) {
    console.log('Hello Editprofile Component');
    this.text = 'Hello World';
    this.type = 'basicinfo';
  }

  closeeditprofile(){

      console.log('close post modal');
      
      this.viewCtrl.dismiss();
      
  }

}
