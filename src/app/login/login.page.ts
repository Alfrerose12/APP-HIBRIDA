import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router

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

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/tabs/inicio']);
      this.loginForm.reset();
    } else {

    }
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