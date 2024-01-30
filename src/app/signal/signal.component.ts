import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, inject,
  Input,
  OnInit,
  signal,
  WritableSignal
} from "@angular/core";
import { HighlightDirective } from "../highlight.directive";
import { CommonModule } from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { CalorieService } from "../calorie.service";
import { AppFormComponent } from "../app-form/app-form.component";
import {MatButton} from "@angular/material/button";
import {RxUnpatch} from "@rx-angular/template/unpatch";

@Component({
  selector: 'signal',
  standalone: true,
  imports: [CommonModule, HighlightDirective, AppFormComponent, MatButton, ReactiveFormsModule, RxUnpatch],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent implements OnInit {

  // mysignal = signal(1);
  //
  // constructor() {
  //   setTimeout(() => setInterval(() => this.changeSignalValue(), 2000), 1000);
  // }
  //
  // changeSignalValue() {
  //   this.mysignal.update((value) => value + 1);
  // }
  changeDetector = inject(ChangeDetectorRef);

  tdeeSignal: WritableSignal<number> = signal(2400);

  constructor(private service: CalorieService) {}

  protected unitHeight = 'cm';
  protected unitWeight = 'kg';
  protected form: FormGroup = new FormGroup({
    unit: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    activity: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
  });

  ngOnInit(): void {
    this.form.controls["unit"].valueChanges.subscribe(x => {
      const selectedUnit = this.form.controls["unit"].value!;
      this.unitHeight = selectedUnit == 'metric' ? 'cm' : 'inch';
      this.unitWeight = selectedUnit == 'metric' ? 'kg' : 'lbs';
    })
  }

  updateTdee(): void {
    const inputs = this.form.controls;
    const tdee = this.service.calculateTdee(
      inputs["unit"].value,
      inputs["gender"].value,
      parseInt(inputs["age"].value),
      parseInt(inputs["height"].value),
      parseInt(inputs["weight"].value),
      inputs["activity"].value
    );

    // this.tdeeSignal.set(tdee); // in blog, explain .set() vs .update()
    this.tdeeSignal.update(() => tdee); // bc OnPush...?

    console.log(tdee);
    this.changeDetector.detectChanges();
  }

}
