import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  buffer = 75;

  constructor() { }

  ngOnInit() {
  }

}
