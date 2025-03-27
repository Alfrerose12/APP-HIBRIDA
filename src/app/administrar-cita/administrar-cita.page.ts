import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-administrar-cita',
  templateUrl: './administrar-cita.page.html',
  styleUrls: ['./administrar-cita.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class AdministrarCitaPage {
  cita: any;

  constructor(private router: Router) { // Inyectar Router correctamente
    this.cita = {
      fechaHora: '2025-03-27T10:00:00',
      motivo: 'Consulta médica'
    };
  }

  cancelarCita() {
    console.log('Cita cancelada');
    this.cita = {}; // Vaciar la cita
    this.router.navigate(['/tabs/inicio']); // Redirigir a la pestaña de inicio
  }
}
