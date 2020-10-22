import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola Mundo, soy Peter Parker";
        this.comentario = "He sido Spider-man por 5 años";
        this.year = 2020;
         
        console.log("Componente mi-componente cargado");
        console.log(this.titulo, this.comentario, this.year);
    }
}