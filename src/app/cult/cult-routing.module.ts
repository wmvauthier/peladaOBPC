import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultPage } from './cult.page';

const routes: Routes = [
  {
    path: '',
    component: CultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultPageRoutingModule {}
