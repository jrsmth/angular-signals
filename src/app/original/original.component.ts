import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HighlightDirective } from "../core/directive/highlight.directive";
import { JokeService } from "../core/service/joke.service";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'original',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './original.component.html',
  styleUrl: './original.component.scss'
})
export class OriginalComponent {
  title = 'angular-signals';
  jokeQuestion: string = "";
  jokeAnswer: string = "";

  private _renderCount = 0;

  get renderCount() {
    return ++this._renderCount;
  }

  constructor(private jokeService: JokeService) {
    this.nextJoke();
  }

  nextJoke(): void {
    const joke = this.jokeService.getRandom();
    this.jokeQuestion = joke.question;
    this.jokeAnswer = joke.answer;
  }

  protected readonly faCaretRight = faCaretRight;
}
