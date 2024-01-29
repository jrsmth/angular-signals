import { Directive, DoCheck, ElementRef, inject, Input } from '@angular/core';
import confetti from "canvas-confetti";

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements DoCheck {
  @Input('highlight') highlightColor?: string;
  defaultColor = '#a3cc95';
  className = 'highlight';
  el = inject(ElementRef);

  ngDoCheck() {
    this.addHighlight();
    setTimeout(() => this.removeHighlight(), 500);
  }

  private addHighlight() {
    (this.el.nativeElement as HTMLElement).classList.add(this.className);
    // confetti({
    //   particleCount: 100,
    //   spread: 200,
    //   origin: { y: 0.6 },
    // });
    // console.log(this.el.nativeElement as HTMLElement);
  }

  private removeHighlight() {
    (this.el.nativeElement as HTMLElement).classList.remove(this.className);
  }
}
