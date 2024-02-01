import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HighlightDirective} from "../core/highlight.directive";

@Component({
  selector: 'subject',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  title = 'angular-signals';
  renderCount = 0;

  handleClick(): void {
    this.renderCount++;
  }
}
