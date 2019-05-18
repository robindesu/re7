import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the CollectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html',
})
export class CollectPage {

  scanning: boolean;
  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectPage');
  }

  scan() {
    console.log("Preparing scanner");
    this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
            if (status.authorized) {
                console.log("Scanner authorized...");
                // camera permission was granted

                // start scanning
                let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                    console.log('Scanned something:', text);

                    this.scanning = false;
                    this.qrScanner.hide(); // hide camera preview
                    scanSub.unsubscribe(); // stop scanning

                    this.code = text;
                    // this.navCtrl.push('CollectConfirmPage', {
                    //   id: text
                    // });
                });

                // show camera preview
                this.scanning = true;
                this.qrScanner.resumePreview();
                this.qrScanner.show();

                // wait for user to scan something, then the observable callback will be called

            } else if (status.denied) {
              console.log("Scanner denied.");
              // camera permission was permanently denied
              // you must use QRScanner.openSettings() method to guide the user to the settings page
              // then they can grant the permission from there
            } else {
                console.log("Scanner denied now.");
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
      }).catch((e: any) => console.log('Error is', e));
  }

}
