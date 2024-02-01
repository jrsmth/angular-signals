import {ChangeDetectionStrategy, Component, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HighlightDirective} from "../core/directive/highlight.directive";
import {JokeService} from "../core/service/joke.service";

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
  renderCount: number = 0;
  jokeQuestion: string = "";
  jokeAnswer: string = "";

  constructor(private jokeService: JokeService) {}

  handleClick(): void {
    this.renderCount++;

    const joke = this.jokeService.getRandom();
    this.jokeQuestion = joke.question;
    this.jokeAnswer = joke.answer;
  }
}
