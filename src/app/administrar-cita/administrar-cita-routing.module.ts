import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarCitaPage } from './administrar-cita.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarCitaPageRoutingModule {}
