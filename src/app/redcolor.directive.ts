import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[Redcolor]'
})
export class RedcolorDirective {

  constructor(el:ElementRef) {
el.nativeElement.style.color = "yellow";
   
   }
 

}
