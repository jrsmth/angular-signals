import { Directive, DoCheck, ElementRef, Inject, inject, Input } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import confetti from "canvas-confetti";

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements DoCheck {
  private el = inject(ElementRef);
  private className = 'highlight';
  @Inject(DOCUMENT) private document!: Document

  ngDoCheck() {
    console.debug(`[doCheck] ...`)
    this.addHighlight();
    setTimeout(() => this.removeHighlight(), 1000);
  }

  private addHighlight() {
    confetti({
      particleCount: 200 * Math.random(),
      spread: 500 * Math.random(),
      origin: { x: Math.random(), y: Math.random() },
    });

    const actives = document.querySelectorAll('.active');
    actives.forEach((active) => {
      active.classList.remove('active');
    });

    const element = this.el.nativeElement as HTMLElement;
    console.debug(`[adding highlight] element [${element.nodeName}]`);
    element.classList.add(this.className);
    element.classList.add('active');
  }

  private removeHighlight() {
    const element = this.el.nativeElement as HTMLElement;
    console.debug(`[removing highlight] element [${element.nodeName}]`);
    element.classList.remove(this.className);
  }
}
