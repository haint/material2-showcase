import { Component, OnInit } from '@angular/core';
import { Customer, CustomerApi } from 'app/shared/sdk';
import { AreaChartConfig } from 'app/area-chart/area-chart-config';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  private customer: Customer = new Customer();

  private range = 'weekly';

  private areaChartConfig: Array<AreaChartConfig>;

  constructor(private customerApi: CustomerApi) { }

  ngOnInit() {
  }

  getStats() {
    this.customerApi.customerStatsWrapper(this.customer.id, this.range)
      .subscribe((stats: any) => {
        const customerIncomeArea: AreaChartConfig = {
          settings: {
            fill: 'rgba(1, 67, 163, 1)',
            interpolation: 'monotone',
          }, dataset: stats.customerIncomeStats.map(data => {
            return { x: new Date(data.date), y: data.count };
          })
        };

        const customerOrderArea = {
          settings: {
            fill: 'rgba(195, 0, 47, 1)',
            interpolation: 'monotone'
          }, dataset: stats.customerOrderStats.map(data => {
            return { x: new Date(data.date), y: data.count };
          })
        };

        this.areaChartConfig = new Array<AreaChartConfig>();
        this.areaChartConfig.push(customerIncomeArea);
        this.areaChartConfig.push(customerOrderArea);
      });
  }

}
