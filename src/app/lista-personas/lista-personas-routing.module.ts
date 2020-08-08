import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPersonasPage } from './lista-personas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPersonasPageRoutingModule {}
