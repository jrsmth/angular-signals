import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signals';
  tdee: number = 2200;
  signalled: boolean = false;

  tdeeForm = new FormGroup({
    unit: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    activity: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
  });

  activateForm(formName: string): void {
    this.signalled = (formName == 'with');
  }

  calculateTdee(): void {
    const form = this.tdeeForm.controls;

    if (this.signalled) {
      const bmr = this.calculateBMR(
        form.unit.value == null ? "" : form.unit.value,
        form.gender.value == null ? "" : form.gender.value,
        form.age.value == null ? 0 : parseInt(form.age.value),
        form.height.value == null ? 0 : parseInt(form.height.value),
        form.weight.value == null ? 0 : parseInt(form.weight.value),
      )

      switch (form.activity.value) {
        case "sedentary":
          this.tdee = bmr * 1.2;
          break;
        case "light":
          this.tdee = bmr * 1.375;
          break;
        case "moderate":
          this.tdee = bmr * 1.55;
          break;
        case "heavy":
          this.tdee = bmr * 1.75;
          break;
        case "intense":
          this.tdee = bmr * 1.9;
          break;
        default:
          this.tdee = bmr;
      }
    } else {
      this.tdee = 2500;
    }
  }

  calculateBMR(unit: string, gender: string, age: number, height: number, weight: number): number {
    // Male: 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years)
    // Female: 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years)

    if (unit == "imperial") {
      height /= 2.54;
      weight /= 2.2;
    }

    if (gender == "female") {
      return Math.round(665 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
    } else {
      return Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
    }
  }

}

enum Unit {
  IMPERIAL,
  METRIC,
}

enum Gender {
  FEMALE,
  MALE
}
