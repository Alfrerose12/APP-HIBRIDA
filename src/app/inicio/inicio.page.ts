import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {

  messageCount = 5;
  isModalOpen = false;
  modalTemplate: any;

  constructor( 
    private menuController : MenuController, 
    private modalController: ModalController, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menuController.close(); 
  }

  async openModal(type: string) {
    this.isModalOpen = true;
    this.modalTemplate = type;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  logout() {
    localStorage.removeItem('token'); // Elimina el token
    localStorage.removeItem('refreshToken'); // Elimina el refresh token
    this.router.navigate(['/login']).then(() => {
      window.history.replaceState({}, '', '/login'); // Limpia el historial del navegador
    });
  }

}
