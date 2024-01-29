import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CalorieService {

  calculateBMR(unit: string, gender: string, age: number, height: number, weight: number): number {
    // Male: 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years)
    // Female: 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years)

    if (unit == "imperial") {
      height /= 2.54;
      weight /= 2.2;
    }

    return gender == "female" ?
      665 + (9.6 * weight) + (1.8 * height) - (4.7 * age) :
      66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  }

  calculateTdee(unit: string, gender: string, age: number, height: number, weight: number, activity: string): number {
    const bmr = this.calculateBMR(unit, gender, age, height, weight);

    let tdee = Math.round(bmr);
    switch (activity) {
      case "sedentary":
        tdee = Math.round(bmr * 1.2);
        break;
      case "light":
        tdee = Math.round(bmr * 1.375);
        break;
      case "moderate":
        tdee = Math.round(bmr * 1.55);
        break;
      case "heavy":
        tdee = Math.round(bmr * 1.75);
        break;
      case "intense":
        tdee = Math.round(bmr * 1.9);
        break;
    }

    return tdee;
  }

}
