import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerticalBarChartComponent } from 'src/app/common/vertical-bar-chart/vertical-bar-chart.component';
import { LineChartComponent } from 'src/app/common/line-chart/line-chart.component';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';




@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, VerticalBarChartComponent, LineChartComponent, RouterModule, BaseChartDirective],
})
export class EstadisticasPage implements OnInit{
  title = 'ng2-charts-demo';


  //data
  graphSize: any = [window.innerWidth * 0.8, window.innerHeight * 0.5];
  exercises: any[] = [
    {
      "exerciseId": "1",
      "exerciseName": "Press de banca",
    },
    {
      "exerciseId": "2",
      "exerciseName": "Sentadillas",
    },
    {
      "exerciseId": "3",
      "exerciseName": "Dominadas",
    },
    {
      "exerciseId": "4",
      "exerciseName": "Peso muerto",
    },
    {
      "exerciseId": "5",
      "exerciseName": "Press militar",
    },
  ];
  graphData: any[] = [
    {
      "name": "Volumen total",
      "series": [
        {
          "name": "1/1/2021",
          "value": 100,
        },
        {
          "name": "1/2/2021",
          "value": 150,
        },
        {
          "name": "1/3/2021",
          "value": 100,
        },
        {
          "name": "1/4/2021",
          "value": 160,
        },
        {
          "name": "1/5/2021",
          "value": 190,
        },
        {
          "name": "1/6/2021",
          "value": 180,
        },
        {
          "name": "1/7/2021",
          "value": 200,
        },
        {
          "name": "1/8/2021",
          "value": 210,
        },
        {
          "name": "1/9/2021",
          "value": 240,
        },
        {
          "name": "1/10/2021",
          "value": 180,
        },
        {
          "name": "1/11/2021",
          "value": 290,
        },
        {
          "name": "1/12/2021",
          "value": 250,
        },
        {
          "name": "1/13/2021",
          "value": 255,
        },
        {
          "name": "1/14/2021",
          "value": 280,
        },
      ]
    }
  ];

  //ngdata
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  onClickExercise(ejercicioId: number) {
    localStorage.setItem('ejercicioId', ejercicioId.toString());
    this.router.navigate(['/estadisticas-ejercicio']);
  }

  constructor(private router: Router) { 
    addIcons({arrowBack});
  }

  ngOnInit() {
    console.log(this.graphData);

    const config = {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
          }]
        }
    };
  }
}
