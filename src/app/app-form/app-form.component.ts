import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {CalorieService} from "../calorie.service";
import {RxUnpatch} from "@rx-angular/template/unpatch";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatButton, ReactiveFormsModule, RxUnpatch],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.scss'
})
export class AppFormComponent implements OnInit {

  @Output() submission: EventEmitter<any> = new EventEmitter();

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

  submit(): void {
    this.submission.emit(this.form.controls);
  }

}
