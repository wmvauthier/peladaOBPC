import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateTicketPagePageRoutingModule } from './validate-ticket-page-routing.module';
import { NgxQRCodeModule } from "ngx-qrcode2";

import { ValidateTicketPagePage } from './validate-ticket-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    ValidateTicketPagePageRoutingModule
  ],
  declarations: [ValidateTicketPagePage]
})
export class ValidateTicketPagePageModule {}
