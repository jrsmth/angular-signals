import {
  AfterViewInit, ApplicationRef,
  ChangeDetectionStrategy,
  Component, ElementRef, inject, Injector, NgZone,
  OnInit,
  runInInjectionContext,
  signal, ViewChild,
  WritableSignal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { HighlightDirective } from "./highlight.directive";
import {SignalComponent} from "./signal/signal.component";
import {OriginalComponent} from "./original/original.component";
import {fromEvent, interval, throttle} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, MatButton, HighlightDirective, SignalComponent, OriginalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'angular-signals';
  tdee: number = 2200;
  signalled: boolean = false;

  @ViewChild('withSignal') withSignal!: ElementRef<HTMLElement>;
  @ViewChild('withoutSignal') withoutSignal!: ElementRef<HTMLElement>;
  ngZone = inject(NgZone);
  injector = inject(Injector);
  app = inject(ApplicationRef);

  activateForm(formName: string): void {
    this.signalled = (formName == 'with');
  }

  ngAfterViewInit(): void {
    runInInjectionContext(this.injector, () => {
      this.ngZone.runOutsideAngular(() => {
        fromEvent(this.withSignal.nativeElement, 'click')
          .pipe(throttle(() => interval(1000)), takeUntilDestroyed())
          .subscribe(() => {

            // this.updateTdee();

            // trigger the CD
            this.app.tick();
          });

        fromEvent(this.withoutSignal.nativeElement, 'click')
          .pipe(throttle(() => interval(1000)), takeUntilDestroyed())
          .subscribe(() => {

            // this.updateTdee();

            // trigger the CD
            this.app.tick();
          });
      });
    });
  }

}

enum Unit {
  IMPERIAL,
  METRIC,
}

enum Gender {
  FEMALE,
  MALE
}
