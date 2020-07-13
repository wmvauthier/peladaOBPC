import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateEventPageRoutingModule } from './validate-event-routing.module';

import { ValidateEventPage } from './validate-event.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // QRScanner,
    IonicModule,
    ValidateEventPageRoutingModule
  ],
  providers: [QRScanner],
  declarations: [ValidateEventPage]
})
export class ValidateEventPageModule {}
