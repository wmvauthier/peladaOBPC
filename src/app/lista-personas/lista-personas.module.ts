import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPersonasPageRoutingModule } from './lista-personas-routing.module';

import { ListaPersonasPage } from './lista-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPersonasPageRoutingModule
  ],
  declarations: [ListaPersonasPage]
})
export class ListaPersonasPageModule {}
