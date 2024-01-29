import {ChangeDetectionStrategy, Component, Input, signal, WritableSignal} from "@angular/core";
import { HighlightDirective } from "../highlight.directive";
import { CommonModule } from "@angular/common";
import { FormGroup } from "@angular/forms";
import { AppFormComponent } from "../app-form/app-form.component";
import {CalorieService} from "../calorie.service";

@Component({
  selector: 'original',
  standalone: true,
  imports: [CommonModule, HighlightDirective, AppFormComponent],
  templateUrl: './original.component.html',
  styleUrl: './original.component.scss'
})
export class OriginalComponent {

  @Input() form: FormGroup = new FormGroup({});

  tdee: number = 2600;

  constructor(private service: CalorieService) {}

  updateTdee(inputs: any): void {
    this.tdee = this.service.calculateTdee(
      inputs.unit.value,
      inputs.gender.value,
      parseInt(inputs.age.value),
      parseInt(inputs.height.value),
      parseInt(inputs.weight.value),
      inputs.activity.value
    );
  }


}
