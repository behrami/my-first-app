import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-assignment',
  templateUrl: './display-assignment.component.html',
  styleUrls: ['./display-assignment.component.css'],
})
export class DisplayAssignmentComponent implements OnInit {
  details =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet mauris lorem, ac viverra libero fermentum non. Sed convallis lectus at ex posuere, at vulputate mi ultrices. ';
  displayBtn = true;
  dispayDetails = false;
  btnClicks = [];

  addTimestamp() {
    this.btnClicks.push(Date().toLocaleString());
  }

  onDisplayClick() {
    this.displayBtn = false;
    this.dispayDetails = true;
    this.addTimestamp();
  }

  onHideClick() {
    this.displayBtn = true;
    this.dispayDetails = false;
    this.addTimestamp();
  }

  constructor() {}

  ngOnInit(): void {}
}
