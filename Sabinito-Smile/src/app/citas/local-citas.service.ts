import { Injectable } from '@angular/core';
import { citasInterface } from './local-citas.model';

@Injectable({
  providedIn: 'root'
})
export class LocalCitasService {
  private arrayCitas: citasInterface[];

  constructor() {
    this.arrayCitas = JSON.parse(localStorage.getItem('data') || '[]');

  }

  getArrayCitas() {
    return this.arrayCitas;
  }

  mostrarHorasArrayCitas(): void {
    for (let cita of this.arrayCitas) {
      console.log(cita.hora);
    }
  }

  agregarCita(cita: citasInterface) {
    this.arrayCitas.push(cita);
    localStorage.setItem('data', JSON.stringify(this.arrayCitas));
  }

  nuevaCita(): citasInterface {
    return {
      nombre: "",
      apellidos: "",
      edad: "",
      telefono: "",
      correo: "",
      fecha: "",
      hora: "",
    }
  }
}
