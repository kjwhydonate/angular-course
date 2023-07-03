import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor)
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor)
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
    // this.backgroundColor = 'transparent'

  }
}
