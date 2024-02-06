import {ChangeDetectionStrategy, Component, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HighlightDirective} from "../core/directive/highlight.directive";
import {JokeService} from "../core/service/joke.service";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'subject',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  title = 'angular-signals';
  jokeQuestion: string = "";
  jokeAnswer: string = "";

  private _renderCount = 0;

  get renderCount() {
    return ++this._renderCount;
  }

  constructor(private jokeService: JokeService) {}

  handleClick(): void {
    const joke = this.jokeService.getRandom();
    this.jokeQuestion = joke.question;
    this.jokeAnswer = joke.answer;
  }

  protected readonly faCaretRight = faCaretRight;
}
