import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HighlightDirective} from "../core/highlight.directive";

@Component({
  selector: 'signal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  title = 'angular-signals';
  renderCount = 0;

  handleClick(): void {
    this.renderCount++;
  }
}
