import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  @ViewChild('loginForm') loginForm!: NgForm; 

  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient, private alertController: AlertController) {}

  async onSubmit() {
    if (this.loginForm.valid) {
      await this.showSuccessAlert();
      this.router.navigate(['/tabs/inicio']);
      this.loginForm.reset();
    } else {

    }
  }

    async showSuccessAlert() {
      const alert = await this.alertController.create({
        header: 'Inicio de Sesión',
        message: 'Haz iniciado sesión exitosamente.',
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

  // Usar este código si se va a hacer una petición HTTP al servidor para iniciar sesión
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const loginData = { email: this.email, password: this.password };

  //     this.http.post('https://odontologia-integral.site/api/login', loginData).subscribe({
  //       next: (response) => {
  //         this.router.navigate(['/tabs/inicio']);
  //         this.loginForm.reset();
  //       },
  //       error: (err) => {
  //       }
  //     });
  //   }
  // }
}