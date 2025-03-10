import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  @ViewChild('registerForm') registerForm!: NgForm;

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private http: HttpClient, private alertController: AlertController) {}

  ngOnInit() {

  }

  async onSubmit() {
    if (this.registerForm.valid && this.password === this.confirmPassword) {
      await this.showSuccessAlert();
      this.router.navigate(['/login']);
      this.registerForm.reset();
    } else {
    }
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Cuenta Creada',
      message: 'Tu cuenta ha sido creada exitosamente. Ahora puedes iniciar sesión.',
      buttons: [
        {
          text: 'Cerrar',
          role: 'confirm',
          cssClass: 'custom-alert-button'
        }
      ],
      cssClass: 'success-alert'
    });

    await alert.present();
  }
  
  // Utiliza este código si deseas hacer una petición HTTP al servidor para registrar al usuario
  // onSubmit() {
  //   if (this.registerForm.valid && this.password === this.confirmPassword) {
  //     const userData = { email: this.email, password: this.password };

  //     this.http.post('https://odontologia-integral.site/api/register', userData).subscribe({
  //       next: (response) => {
  //         this.router.navigate(['/tabs/inicio']);
  //         this.registerForm.reset();
  //       },
  //       error: (err) => {
  //       }
  //     });
  //   }
  // }
}
