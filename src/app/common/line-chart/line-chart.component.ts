import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class LineChartComponent  implements OnInit {

  // options
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  @Input() view: any;
  @Input() graphData: any;

  colorScheme: any = {
    domain: ['#319795', '#2C7A7B', '#38B2AC', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {}

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(event: any) {
    console.log(event);
  }

  onDeactivate(event: any) {
    console.log(event);
  }


}
