import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
// import { BonusPageModule } from '../bonus/bonus.module';

import { ItemDetailPage } from './item-detail';



@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild(),
    // BonusPageModule
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
