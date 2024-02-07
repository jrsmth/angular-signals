import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignalComponent } from "./signal/signal.component";
import { OriginalComponent } from "./original/original.component";
import { HighlightDirective } from "./core/directive/highlight.directive";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignalComponent, OriginalComponent, HighlightDirective, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _renderCount = 0;

  get renderCount() {
    return ++this._renderCount;
  }
}
