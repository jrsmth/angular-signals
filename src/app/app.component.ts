import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signals';
  tdee: number = 2200;
  signalled: boolean = false;
  withoutSignalsForm: FormGroup;
  withSignalsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.withoutSignalsForm = this.formBuilder.group({
      unit: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      activity: ['', [Validators.required]]
    });

    this.withSignalsForm = this.formBuilder.group({
      unit: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      activity: ['', [Validators.required]]
    });
  }

  activateForm(formName: string): void {
    this.signalled = (formName == 'with');
  }

  calculateTdee(): string {
    return '2200';
  }

}
