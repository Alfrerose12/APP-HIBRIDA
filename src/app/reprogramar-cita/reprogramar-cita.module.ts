import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule
import { IonicModule } from '@ionic/angular';

import { ReprogramarCitaPageRoutingModule } from './reprogramar-cita-routing.module';

import { ReprogramarCitaPage } from './reprogramar-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReprogramarCitaPageRoutingModule
  ],
  declarations: [ReprogramarCitaPage]
})
export class ReprogramarCitaPageModule {}
