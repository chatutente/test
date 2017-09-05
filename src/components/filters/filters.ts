import { Component } from '@angular/core';

import { ViewController,NavController,ModalController } from 'ionic-angular';

/*
  Generated class for the Filters component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'filters',
  templateUrl: 'filters.html'
})
export class FiltersComponent {

  text: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController) {
    console.log('Hello Filters Component');
    this.text = 'Hello World';
  }

  closefilters(){
      console.log('close post modal');
      this.viewCtrl.dismiss();
  }

}
