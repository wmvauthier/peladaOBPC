import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateEventPage } from './validate-event.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateEventPageRoutingModule {}
