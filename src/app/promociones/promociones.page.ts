import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
  standalone: false
})
export class PromocionesPage implements OnInit {

  promociones = [
    {
      titulo: "Descuento del 20%",
      descripcion: "Si haces tu cita hoy, obtienes un 20% de descuento en tu consulta.",
      img: "https://www.pngarts.com/files/1/Colgate-PNG-Image-1.png"
    },
    {
      titulo: "Descuento en citas múltiples",
      descripcion: "Si llevas más de 5 citas, obtienes un producto de regalo y un 30% de descuento en tu próxima cita.",
      img: "https://images.ctfassets.net/m9qku1qrfhc5/2005nuM2QlALVPcR34QuZL/3f4ce7d093d616af9868c508ae5f424a/listerine-coolmint-500ml-front-es-ec"
    },
    {
      titulo: "Pasta de dientes gratis",
      descripcion: "Al reservar 3 citas, te regalamos una pasta dental.",
      img: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/parodontax-v3/es_ES/2024-packshots-555x555/Parodontax_Meerkat_Extra%20%20Fresh__AWA_Banners_Other_0s_es_ESP_555x555.png?auto=format"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
