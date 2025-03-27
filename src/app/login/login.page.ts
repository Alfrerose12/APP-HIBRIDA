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
      const loginData = { email: this.email, password: this.password };
  
      try {
        const response = await this.http.post('http://localhost:3004/api/login', loginData).toPromise();
        this.router.navigate(['/tabs/inicio']);
        this.loginForm.reset();
      } catch (error) {
        await this.showErrorAlert(error);
      }
    } else {
      await this.showValidationAlert();
    }
  }
  
  async showErrorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Hubo un problema al iniciar sesión. Por favor, verifica tus credenciales e inténtalo de nuevo.',
      buttons: ['OK'],
      cssClass: 'error-alert'
    });
  
    await alert.present();
  }
  
  async showValidationAlert() {
    const alert = await this.alertController.create({
      header: 'Formulario Inválido',
      message: 'Por favor, completa todos los campos correctamente.',
      buttons: ['OK'],
      cssClass: 'validation-alert'
    });
  
    await alert.present();
  }

  // Usar este código si solo se quiere mostrar una alerta de éxito al iniciar sesión
  // async onSubmit() {
  //   if (this.loginForm.valid) {
  //     await this.showSuccessAlert();
  //     this.router.navigate(['/tabs/inicio']);
  //     this.loginForm.reset();
  //   } else {

  //   }
  // }
}