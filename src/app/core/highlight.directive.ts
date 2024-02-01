import {Directive, DoCheck, ElementRef, inject, Input} from "@angular/core";

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements DoCheck {
  @Input() highlight?: string = '';
  className = 'highlight';
  el = inject(ElementRef);

  ngDoCheck() {
    console.log(`[doCheck] ...`)
    this.addHighlight();
    setTimeout(() => this.removeHighlight(), 500);
  }

  private addHighlight() {
    const element = this.el.nativeElement as HTMLElement;
    console.log(`[adding highlight] element [${element.nodeName}]`);
    element.classList.add(this.className);
  }

  private removeHighlight() {
    const element = this.el.nativeElement as HTMLElement;
    console.log(`[removing highlight] element [${element.nodeName}]`);
    element.classList.remove(this.className);
  }
}
