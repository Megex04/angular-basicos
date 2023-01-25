import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    // this.heroes.pop(); // elimina el ultimo
    const heroeBorrado = this.heroes.shift() || ''; // elimina el primer elemento
    this.heroeBorrado = heroeBorrado;
  }
}
