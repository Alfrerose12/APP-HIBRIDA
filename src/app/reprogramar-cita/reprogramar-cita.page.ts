import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reprogramar-cita',
  templateUrl: './reprogramar-cita.page.html',
  styleUrls: ['./reprogramar-cita.page.scss'],
  standalone: false, // Si usas Angular standalone, cámbialo a true
})
export class ReprogramarCitaPage implements OnInit {
  
  reprogramarCitaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) {
    this.reprogramarCitaForm = this.fb.group({
      fechaHora: ['', Validators.required],
      motivo: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.reprogramarCitaForm.valid) {
      const alert = await this.alertController.create({
        header: 'Cita Reprogramada',
        message: 'Tu cita ha sido reprogramada con éxito.',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.reprogramarCitaForm.reset(); 
              this.router.navigate(['/tabs/inicio']);
            },
          },
        ],
      });

      await alert.present();
    }
  }

  administrarCita() {
    this.router.navigate(['/administrar-cita']); // Redirige a la nueva página de administración de citas
  }
}
