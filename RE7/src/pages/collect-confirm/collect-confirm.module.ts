import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectConfirmPage } from './collect-confirm';

@NgModule({
  declarations: [
    CollectConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectConfirmPage),
  ],
})
export class CollectConfirmPageModule {}
