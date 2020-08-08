import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvOptionsPage } from './adv-options.page';

const routes: Routes = [
  {
    path: '',
    component: AdvOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvOptionsPageRoutingModule {}
