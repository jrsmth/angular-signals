import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SignalComponent} from "./signal/signal.component";
import {SubjectComponent} from "./subject/subject.component";
import {HighlightDirective} from "./core/directive/highlight.directive";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignalComponent, SubjectComponent, HighlightDirective, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signals';
  protected readonly faGithub = faGithub;
  private _renderCount = 0;

  get renderCount() {
    return ++this._renderCount;
  }
}
