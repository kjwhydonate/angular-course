import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component {
  displayText = false;
  clickHistory = [];

  onClickDisplayText() {
    this.displayText = !this.displayText;
    if (this.displayText) {
      this.clickHistory.push(new Date());
    }
  }
}
