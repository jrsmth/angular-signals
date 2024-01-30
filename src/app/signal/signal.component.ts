import {ChangeDetectionStrategy, Component, Input, signal, WritableSignal} from "@angular/core";
import { HighlightDirective } from "../highlight.directive";
import { CommonModule } from "@angular/common";
import { FormGroup } from "@angular/forms";
import { CalorieService } from "../calorie.service";
import { AppFormComponent } from "../app-form/app-form.component";

@Component({
  selector: 'signal',
  standalone: true,
  imports: [CommonModule, HighlightDirective, AppFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  @Input() form: FormGroup = new FormGroup({});

  // mysignal = signal(1);
  //
  // constructor() {
  //   setTimeout(() => setInterval(() => this.changeSignalValue(), 2000), 1000);
  // }
  //
  // changeSignalValue() {
  //   this.mysignal.update((value) => value + 1);
  // }

  tdeeSignal: WritableSignal<number> = signal(2400);

  constructor(private service: CalorieService) {}

  updateTdee(inputs: any): void {
    const tdee = this.service.calculateTdee(
      inputs.unit.value,
      inputs.gender.value,
      parseInt(inputs.age.value),
      parseInt(inputs.height.value),
      parseInt(inputs.weight.value),
      inputs.activity.value
    );

    // this.tdeeSignal.set(tdee); // in blog, explain .set() vs .update()
    this.tdeeSignal.update(() => tdee); // bc OnPush...?
  }

}
