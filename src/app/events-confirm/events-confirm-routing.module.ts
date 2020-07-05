import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsConfirmPage } from './events-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: EventsConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsConfirmPageRoutingModule {}
