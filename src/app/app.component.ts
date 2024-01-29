import {ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { HighlightDirective } from "./highlight.directive";
import {SignalComponent} from "./signal/signal.component";
import {OriginalComponent} from "./original/original.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, MatButton, HighlightDirective, SignalComponent, OriginalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signals';
  tdee: number = 2200;
  signalled: boolean = false;

  activateForm(formName: string): void {
    this.signalled = (formName == 'with');
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
