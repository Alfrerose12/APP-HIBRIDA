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

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  emergencyNumber: string = '';

  constructor(private router: Router, private http: HttpClient, private alertController: AlertController) {}

  ngOnInit() {

  }

  // Con dominio de la app
  // async onSubmit() {
  //   if (this.registerForm.valid && this.password === this.confirmPassword) {

  //     const [firstName, lastName, middleName] = this.fullName.split(' ');

  //     const userData = {
  //       firstName: firstName || '',
  //       lastName: lastName || '',
  //       middleName: middleName || '',
  //       email: this.email,
  //       password: this.password,
  //       emergencyNumber: this.emergencyNumber,

  //     this.http.post('http://odontologia-integral.site/api/register', userData).subscribe({
  //       next: async (response) => {
  //         this.router.navigate(['/tabs/inicio']);
  //         this.registerForm.reset();
  //       },
  //       error: async (err) => {
  //       }
  //     });
  //   }
  // }

  // Con dominio local
  async onSubmit(registerForm: NgForm) {
    if (registerForm.valid && this.password === this.confirmPassword) {

      const [firstName, lastName, middleName] = this.fullName.split(' ');

      const userData = {
        firstName: firstName || '',
        lastName: lastName || '',
        middleName: middleName || '',
        email: this.email,
        password: this.password,
        emergencyNumber: this.emergencyNumber,
      };

      this.http.post('http://localhost:3004/api/register', userData).subscribe({
        next: async () => {
          this.router.navigate(['/tabs/inicio']);
          registerForm.resetForm();
        },
        error: async (err) => {
          await this.showErrorAlert(err);
        },
      });
    } else {
      this.showValidationAlert();
    }
  }

  

  isPhoneNumberValid(): boolean {
    const phoneRegex = /^[0-9]{10}$/; 
    return phoneRegex.test(this.emergencyNumber);
  }

  async showErrorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Hubo un problema al crear tu cuenta. Por favor, intenta de nuevo.',
      buttons: ['OK'],
      cssClass: 'error-alert',
    });

    await alert.present();
  }

  async showValidationAlert() {
    const alert = await this.alertController.create({
      header: 'Formulario Inválido',
      message: 'Por favor, completa todos los campos correctamente y asegúrate de que las contraseñas coincidan.',
      buttons: ['OK'],
      cssClass: 'validation-alert',
    });

    await alert.present();
  }
}

