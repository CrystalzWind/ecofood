import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonHighlighted]'
})
export class ButtonHighlightedDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnInit() {

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = '#ed6663';
    this.color = 'white'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'white';
    this.color = '#252932'
  }
}
