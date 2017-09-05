import { Component } from '@angular/core';
import { ViewController,NavController,ModalController } from 'ionic-angular';



/*
  Generated class for the Views component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'views',
  templateUrl: 'views.html'
})
export class ViewsComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Views Component');
    this.text = 'Hello World';
  }

  closeviews(){

      console.log('close post modal');
      
      this.viewCtrl.dismiss();
      
  }

}
