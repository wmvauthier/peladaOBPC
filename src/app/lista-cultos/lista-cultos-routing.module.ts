import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCultosPage } from './lista-cultos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCultosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCultosPageRoutingModule {}
