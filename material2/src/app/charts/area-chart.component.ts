import { Component, Input, ElementRef } from '@angular/core';
import { AreaChartConfig } from 'app/charts/area-chart-config';
import * as D3 from 'd3/index';
import * as Moment from 'moment';

@Component({
  selector: 'app-area-chart',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./area-chart.component.css'],
})
export class AreaChartComponent {

  @Input() config: Array<AreaChartConfig>;

  private host;
  private svg;
  private margin;
  private width;
  private height;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;
  private htmlElement: HTMLElement;

  constructor(private element: ElementRef) {
    this.htmlElement = this.element.nativeElement;
    this.host = D3.select(this.element.nativeElement);
  }

  ngOnChanges() {
  }

  private setup() {
  }

  private buildSVG() {}

  private drawXAxis() {}

  private drawYAxis() {}

  private getMaxY(): number {
    return -1;
  }

  private populate() {
  }
}