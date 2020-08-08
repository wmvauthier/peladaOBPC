import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvOptionsPageRoutingModule } from './adv-options-routing.module';

import { AdvOptionsPage } from './adv-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvOptionsPageRoutingModule
  ],
  declarations: [AdvOptionsPage]
})
export class AdvOptionsPageModule {}
