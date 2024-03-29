import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';




@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, BaseChartDirective],
})
export class EstadisticasPage implements OnInit{

  //data
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
    ],
    datasets: [
      {
        data: [],
        label: 'Total volume',
        fill: false, // Set fill to false to hide the area below the line
        tension: 0.5,
        borderColor: '#39AFAC', // Change the border color to match the area below
        backgroundColor: '#39AFAC' // Keep the background color the same
      }
    ]
  };
  
  public lineChartOptions: ChartOptions<'line'> = {
    scales: {
      y: {
        suggestedMin: 0,  // Set the minimum value to 0
        suggestedMax: 50,  // Set the maximum value to 100 units higher than the maximum value in your data
      }
    },
    responsive: false
  };
  public lineChartLegend = false;

  fillGraphData(graphData: any[]): number[] {
    const output: number[] = [];
  
    // Check if graphData exists and has at least one item
    if (graphData && graphData.length > 0) {
      const series = graphData[0]?.series;
  
      // Iterate over the series array and extract the values
      if (series && series.length > 0) {
        for (const data of series) {
          if (data?.value !== undefined) {
            output.push(data.value);
          }
        }
      }
    }
    return output;
  }

  fillGraphLabels(graphData: any[]): string[] {
    // Fill as many labels as values exist with ''
    return new Array(this.fillGraphData(graphData).length).fill('');
  }

  onClickExercise(ejercicioId: number) {
    localStorage.setItem('ejercicioId', ejercicioId.toString());
    this.router.navigate(['/estadisticas-ejercicio']);
  }

  constructor(private router: Router) { 
    addIcons({arrowBack});
  }

  ngOnInit() {
    console.log(this.graphData);
    this.lineChartData.datasets[0].data = this.fillGraphData(this.graphData);
    this.lineChartData.labels = this.fillGraphLabels(this.graphData);
  }
}
