import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'math-calculator';

  displayValue = '';
  firstValue = '';
  lastValue = '';
  isMode = 'dark';
  state = '';

  constructor(private _themeService: ThemeService) {}

  ngOnInit(): void {
    let active = this._themeService.getActiveTheme();
    this.isMode = active.name;
  }

  setNumber(value: string) {
    if (this.displayValue === '0') {
      this.displayValue = value.toString();
    } else {
      this.displayValue = `${this.displayValue}${value}`;
    }
    // this.displayValue += value;
  }

  setDelete() {
    if (!this.displayValue) {
      return;
    }

    this.displayValue = this.displayValue.slice(0, -1);
    if (this.displayValue.length <= 0) {
      this.setResetAll();
    }
  }

  setCondition(isVal: string) {
    if (!this.displayValue) {
      return;
    }

    this.firstValue = this.displayValue;
    this.state = isVal;
    this.displayValue = '';
  }

  setCalculation() {
    if (!this.displayValue) {
      return;
    }
    this.lastValue = this.displayValue;

    switch (this.state) {
      case '+':
        this.displayValue = (
          parseInt(this.firstValue) + parseInt(this.lastValue)
        ).toString();
        this.setReset();
        break;
      case '-':
        this.displayValue = (
          parseInt(this.firstValue) - parseInt(this.lastValue)
        ).toString();
        this.setReset();
        break;
      case 'x':
        this.displayValue = (
          parseInt(this.firstValue) * parseInt(this.lastValue)
        ).toString();
        this.setReset();
        break;
      case '/':
        this.displayValue = (
          parseInt(this.firstValue) / parseInt(this.lastValue)
        ).toString();
        this.setReset();
        break;

      default:
        break;
    }
  }

  setReset() {
    this.firstValue = '';
    this.lastValue = '';
    this.state = '';
  }

  setResetAll() {
    this.displayValue = '';
    this.firstValue = '';
    this.lastValue = '';
    this.state = '';
  }

  setMode(value: string) {
    if (value.includes(this.isMode)) {
      return;
    }

    this.isMode = value;
    this._themeService.setTheme(this.isMode);
  }
}
