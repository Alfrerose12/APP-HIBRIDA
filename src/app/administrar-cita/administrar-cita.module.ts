import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarCitaPageRoutingModule } from './administrar-cita-routing.module';

import { AdministrarCitaPage } from './administrar-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarCitaPageRoutingModule
  ],
  declarations: [AdministrarCitaPage]
})
export class AdministrarCitaPageModule {}
