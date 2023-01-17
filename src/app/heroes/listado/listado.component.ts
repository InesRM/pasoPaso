import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

constructor() {
console.log('entro en el constructor');
}
ngOnInit(): void {
  // se inicializan cosas
console.log('entro en el onInit');
}
}
