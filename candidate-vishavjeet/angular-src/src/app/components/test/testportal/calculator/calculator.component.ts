import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calSum: string = '0';
  calOperator: string = "";
  calInput: string = '0';
  onShow: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  butInput(value: any) {
    if (value == '-' && this.calInput.indexOf('-') < 0) {
      if (this.calInput == '0') {
        this.calInput = '-';
      }
      else {
        this.calInput = "-" + this.calInput;
      }
      if (this.calOperator == '-')
        this.calOperator = ' ';
      return;
    }
    if (this.calInput.length < 12 && parseInt(value) >= 0 && parseInt(value) <= 9) {
      if (this.calInput == '0') {
        this.calInput = value;
        return;
      }
      this.calInput += value;
    }
    else if (value == "%") {
      this.calOperator = value;
      this.onCalculation();
    }
    else if (value == '.') {
      if (this.calInput.indexOf('.') == -1)
        this.calInput += value;
    }
    else if (!(parseInt(value) >= 0 && parseInt(value) <= 9)) {
      if (this.calSum == '0') {
        this.calSum = this.calInput;
        this.calInput = '0';
      }
      this.calOperator = value;
    }
  }
  //============================================================
  onClickTab() {
    this.onShow = !this.onShow;
  }
  //]==============================================================
  onClickAC() {
    this.calSum = '0';
    this.calInput = '0'
    this.calOperator = "";
  }
  onDelClick() {
    if (this.calInput.length == 1) {
      this.calInput = '0';
      return;
    }
    this.calInput = this.calInput.substring(0, this.calInput.length - 1);
  }
  onCalculation() {
    if (this.calOperator == '^') {
      this.calSum = (eval("Math.pow(" + this.calSum + "," + this.calInput + ")")).toString();
      this.calOperator = "";
    }
    else if (this.calOperator == '%') {
      this.calSum = (eval(this.calInput + "/100")).toString();
      this.calOperator = "";
      this.calInput = '0';
    }
    else if (this.calOperator == 'mod') {
      this.calSum = (eval(this.calSum + "%" + this.calInput)).toString();
    }
    else if (this.calOperator == "sqrt") {
      let num = this.calSum == '0' ? '1' : this.calSum;
      this.calSum = (eval(num + "*" + "Math.sqrt(" + this.calInput + ")")).toString();
    }
    else if (this.calOperator != "") {
      this.calSum = (eval(this.calSum + this.calOperator + this.calInput)).toString();
    }
    this.calInput = '0';
    if (this.calSum.length > 14) {
      this.calSum = Number(this.calSum).toPrecision(10);
    }
  }
}
