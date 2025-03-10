import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprogramarCitaPage } from './reprogramar-cita.page';

const routes: Routes = [
  {
    path: '',
    component: ReprogramarCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprogramarCitaPageRoutingModule {}
