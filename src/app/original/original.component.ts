import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from "@angular/core";
import {HighlightDirective} from "../highlight.directive";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AppFormComponent} from "../app-form/app-form.component";
import {CalorieService} from "../calorie.service";
import {MatButton} from "@angular/material/button";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'original',
  standalone: true,
  imports: [CommonModule, HighlightDirective, AppFormComponent, MatButton, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './original.component.html',
  styleUrl: './original.component.scss'
})
export class OriginalComponent implements OnInit {

  tdee: number = 2600;
  subject = new BehaviorSubject<number>(1);

  changeDetector = inject(ChangeDetectorRef);

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
    this.tdee = this.service.calculateTdee(
      inputs["unit"].value,
      inputs["gender"].value,
      parseInt(inputs["age"].value),
      parseInt(inputs["height"].value),
      parseInt(inputs["weight"].value),
      inputs["activity"].value
    );
    console.log(this.tdee);
    this.changeDetector.detectChanges();
  }

  changeSubjectValue() {
    console.log(`change subject value`);
    this.subject.next(this.subject.value + 1);
  }

}
