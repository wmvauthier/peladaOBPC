import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateTicketPagePage } from './validate-ticket-page.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateTicketPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateTicketPagePageRoutingModule {}
