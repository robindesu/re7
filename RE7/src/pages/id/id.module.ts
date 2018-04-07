import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdPage } from './id';

@NgModule({
  declarations: [
    IdPage,
  ],
  imports: [
    IonicPageModule.forChild(IdPage),
  ],
})
export class IdPageModule {}
