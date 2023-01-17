import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  name: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.name.toUpperCase();
  }

  obtenerDatos(): string {
    return `${this.name} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.name = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 30;
  }

}
