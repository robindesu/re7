import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RequestsService} from "../../app/requests.service";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  alarmOn = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private request: RequestsService) {
  }

  openContainer() {
    this.request.updateData(1).subscribe(data => {
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
