import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.page.html',
  styleUrls: ['./agendar-cita.page.scss'],
  standalone: false
})
export class AgendarCitaPage implements OnInit {

  agendarCitaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.agendarCitaForm = this.formBuilder.group({
      fechaHora: ['', Validators.required],
      motivo: ['', Validators.required],
      servicio: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.agendarCitaForm.valid) {
      const citaData = {
        fechaHora: this.agendarCitaForm.value.fechaHora,
        motivo: this.agendarCitaForm.value.motivo,
        servicio: this.agendarCitaForm.value.servicio
      };

      // Aquí puedes agregar lógica para manejar la cita (enviar datos al servidor, etc.)
      this.router.navigate(['/tabs/inicio']);
      this.generarPDF();
    }
  }

  generarPDF() {
    const doc = new jsPDF();
    const formData = this.agendarCitaForm.value;

    doc.text('Cita Agendada', 20, 20);
    doc.text(`Fecha y Hora: ${formData.fechaHora}`, 20, 30);
    doc.text(`Motivo: ${formData.motivo}`, 20, 40);
    doc.text(`Servicio: ${this.obtenerNombreServicio(formData.servicio)}`, 20, 50);
    
    doc.save('cita-agendada.pdf');
  }

  obtenerNombreServicio(servicio: string) {
    switch(servicio) {
      case 'limpieza-bucal': return 'Limpieza Bucal';
      case 'extraccion-muelas': return 'Extracción de muelas';
      case 'ortodoncia': return 'Ortodoncia';
      case 'implantes': return 'Implantes';
      case 'bruxismo': return 'Bruxismo';
      case 'blanqueamiento-dental': return 'Blanqueamiento dental';
      case 'endodoncia': return 'Endodoncia';
      case 'carillas-dentales': return 'Carillas Dentales';
      default: return 'No especificado';
    }
  }

  realizarPago() {
    console.log('Realizando pago...');
    // Lógica de pago aquí
  }
}
