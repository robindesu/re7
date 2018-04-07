import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import QRCode from 'qrcode';

/**
 * Generated class for the IdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-id',
  templateUrl: 'id.html',
})
export class IdPage {
  // QR Code as data-url
  qr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    generate("1234567890").then(qr => {
      this.qr = qr;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdPage');
  }
}

async function generate(text) {
  try {
    var dataUrl = await QRCode.toDataURL(text, {
      version: 2,
      errorCorrectionLevel: 'H',
      scale: 6,
      color: {
        dark: '#50d2c2ff',
        light: '#00000000'
      }
    });
    return dataUrl;
  } catch (err) {
    console.error(err)
  }
}
