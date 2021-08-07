import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name-assignment',
  templateUrl: './user-name-assignment.component.html',
  styleUrls: ['./user-name-assignment.component.css'],
})
export class UserNameAssignmentComponent implements OnInit {
  userName = '';
  resetDisabled = true;

  onResetUsername() {
    this.userName = '';
  }

  isDisabled() {
    if (this.userName === '') {
      this.resetDisabled = true;
    } else {
      this.resetDisabled = false;
    }
    return this.resetDisabled;
  }

  constructor() {}

  ngOnInit(): void {}
}
