import { AfterViewInit, ApplicationRef, ChangeDetectionStrategy, Component, ElementRef, inject, Injector, NgZone, runInInjectionContext, signal, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HighlightDirective } from "../core/directive/highlight.directive";
import { fromEvent, interval, throttle } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { JokeService } from "../core/service/joke.service";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'signal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent implements AfterViewInit {

  @ViewChild('nextSignal') btn!: ElementRef<HTMLButtonElement>;

  private ngZone = inject(NgZone);
  private injector = inject(Injector);
  private app = inject(ApplicationRef);

  protected readonly faCaretRight = faCaretRight;
  protected renderCount = signal(0);
  protected jokeQuestion = signal("");
  protected jokeAnswer = signal("");

  constructor(private jokeService: JokeService) {}

  ngAfterViewInit(): void {
    // Note :: button click event is captured & handled outside of Angular CD* to highlight signal value change
    runInInjectionContext(this.injector, () => {
      this.ngZone.runOutsideAngular(() => {
        fromEvent(this.btn.nativeElement, 'click')
          .pipe(throttle(() => interval(1000)), takeUntilDestroyed())
          .subscribe(() => {
            this.renderCount.update((value) => value + 1);

            const joke = this.jokeService.getRandom();
            this.jokeQuestion.update(() => joke.question);
            this.jokeAnswer.update(() => joke.answer);

            // trigger Angular Change Detection (CD*)
            this.app.tick();
          });
      });
    });
  }

}
