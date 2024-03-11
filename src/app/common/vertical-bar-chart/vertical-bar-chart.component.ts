import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Input } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class VerticalBarChartComponent  implements OnInit {

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = false;
    xAxisLabel = 'Country';
    showYAxisLabel = false;
    yAxisLabel = 'Population';

    @Input() view: any;
    @Input() graphData: any;

    colorScheme: any = {
      domain: ['#319795', '#2C7A7B', '#38B2AC', '#AAAAAA']
    };

  constructor() { }

  ngOnInit() {
    
  }

  onSelect(event: any) {
    console.log(event);
  }

}
