import { Component, OnInit } from '@angular/core';
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

  constructor( private menuController : MenuController, private modalController: ModalController) { }

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

}
