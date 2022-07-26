import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  //  @Input() set backgroundColor(color:string) {
  @Input('appClass') set backgroundColor(color:string) {
    this.element.nativeElement.style.backgroundColor = color;
   }
// recepciona el valor que se le pasa a la clase dentro de una funcion que ejecuta el cambio
//si lo hace dentro del constructor este se ejecuta y luego llama al valor entrado por lo que al final no se ve en pantalla 
}
