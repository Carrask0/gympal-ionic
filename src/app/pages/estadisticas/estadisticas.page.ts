import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerticalBarChartComponent } from 'src/app/common/vertical-bar-chart/vertical-bar-chart.component';
import { LineChartComponent } from 'src/app/common/line-chart/line-chart.component';



@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, VerticalBarChartComponent, LineChartComponent ]
})
export class EstadisticasPage implements OnInit {

  graphSize: any = [window.innerWidth * 0.8, window.innerHeight * 0.5];

  graphData: any[] = [
    {
      "name": "Volumen total",
      "series": [
        {
          "name": "1",
          "value": 100
        },
        {
          "name": "2",
          "value": 200
        },
        {
          "name": "3",
          "value": 300
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
