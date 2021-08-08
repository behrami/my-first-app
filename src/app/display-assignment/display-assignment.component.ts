import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-assignment',
  templateUrl: './display-assignment.component.html',
  styleUrls: ['./display-assignment.component.css'],
})
export class DisplayAssignmentComponent implements OnInit {
  details =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet mauris lorem, ac viverra libero fermentum non. Sed convallis lectus at ex posuere, at vulputate mi ultrices. Vestibulum bibendum justo in ipsum egestas, a pulvinar lorem fermentum. Proin vel euismod sem. Nulla fermentum sodales lorem, fermentum aliquam elit blandit a. Vestibulum gravida sagittis odio. Aenean egestas condimentum pretium. Curabitur vel felis dapibus, vehicula massa eu, ornare ex. Etiam consequat tellus vel ligula suscipit iaculis. ';
  displayBtn = true;
  dispayDetails = false;
  btnClicks = [];
  numClicks = 0;

  addTimestamp() {
    this.btnClicks.push(Date().toLocaleString());
    this.numClicks++;
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
