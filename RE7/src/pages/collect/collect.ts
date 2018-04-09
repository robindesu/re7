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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public scanner: QRScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectPage');
  }

  scan() {
    this.scanner.prepare()
        .then((status: QRScannerStatus) => {
            if (status.authorized) {
                console.log("Scanner authorized...");
                // camera permission was granted

                // start scanning
                let scanSub = this.scanner.scan().subscribe((text: string) => {
                    console.log('Scanned something', text);

                    this.scanner.hide(); // hide camera preview
                    scanSub.unsubscribe(); // stop scanning
                });

                // show camera preview
                this.scanner.show();

                // wait for user to scan something, then the observable callback will be called

            } else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            } else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
      }).catch((e: any) => console.log('Error is', e));
  }

}
