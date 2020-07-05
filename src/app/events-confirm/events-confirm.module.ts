import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsConfirmPageRoutingModule } from './events-confirm-routing.module';

import { EventsConfirmPage } from './events-confirm.page';
import { NgxQRCodeModule } from "ngx-qrcode2";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxQRCodeModule,
    IonicModule,
    EventsConfirmPageRoutingModule
  ],
  declarations: [EventsConfirmPage]
})
export class EventsConfirmPageModule {}
