import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCultosPageRoutingModule } from './lista-cultos-routing.module';

import { ListaCultosPage } from './lista-cultos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCultosPageRoutingModule
  ],
  declarations: [ListaCultosPage]
})
export class ListaCultosPageModule {}
