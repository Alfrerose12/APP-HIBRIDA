import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TabsPage {
  
  constructor() {}

  animateTab(event: Event) {
    const tabButton = (event.currentTarget as HTMLElement);
    tabButton.classList.add('tab-button-clicked');
    setTimeout(() => {
      tabButton.classList.remove('tab-button-clicked');
    }, 300); // Duración de la animación en milisegundos
  }
}