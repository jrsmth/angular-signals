import {Directive, DoCheck, ElementRef, Inject, inject, Input} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements DoCheck {
  @Input() highlight?: string = '';
  className = 'highlight';
  el = inject(ElementRef);
  @Inject(DOCUMENT) private document!: Document

  ngDoCheck() {
    console.log(`[doCheck] ...`)
    this.addHighlight();
    setTimeout(() => this.removeHighlight(), 500);
  }

  private addHighlight() {
    const actives = document.querySelectorAll('.active');
    actives.forEach((active) => {
      active.classList.remove('active');
    });

    const element = this.el.nativeElement as HTMLElement;
    console.log(`[adding highlight] element [${element.nodeName}]`);
    element.classList.add(this.className);
    element.classList.add('active');
  }

  private removeHighlight() {
    const element = this.el.nativeElement as HTMLElement;
    console.log(`[removing highlight] element [${element.nodeName}]`);
    element.classList.remove(this.className);
  }
}
