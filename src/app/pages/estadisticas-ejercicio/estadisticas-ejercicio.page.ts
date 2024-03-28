import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-estadisticas-ejercicio',
  templateUrl: './estadisticas-ejercicio.page.html',
  styleUrls: ['./estadisticas-ejercicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, BaseChartDirective]
})
export class EstadisticasEjercicioPage implements OnInit {

  ejercicio: any = {};
  ejercicioId: number = 0;
  kgsMovidos: number = 0;
  expectedMax: number = 0;

  ejercicios = [
    {
      "id": 1,
      "nombre": "Ejercicio 1",
      "descripcion": "Descripcion del ejercicio 1",
      "repeticionMaxima": [
        {
          "name": "01/01/2021",
          "value": "10"
        },
        {
          "name": "02/01/2021",
          "value": "12"
        },
        {
          "name": "03/01/2021",
          "value": "15"
        },
        {
          "name": "04/01/2021",
          "value": "20"
        },
        {
          "name": "05/01/2021",
          "value": "25"
        },
        {
          "name": "06/01/2021",
          "value": "30"
        },
        {
          "name": "07/01/2021",
          "value": "35"
        },
        {
          "name": "08/01/2021",
          "value": "40"
        },
        {
          "name": "09/01/2021",
          "value": "45"
        },
        {
          "name": "10/01/2021",
          "value": "50"
        }
      ],
      "pesoEfectivo": [
        {
          "name": "01/01/2021",
          "value": "2"
        },
        {
          "name": "02/01/2021",
          "value": "4"
        },
        {
          "name": "03/01/2021",
          "value": "6"
        },
        {
          "name": "04/01/2021",
          "value": "8"
        },
        {
          "name": "05/01/2021",
          "value": "10"
        },
        {
          "name": "06/01/2021",
          "value": "12"
        },
        {
          "name": "07/01/2021",
          "value": "14"
        },
        {
          "name": "08/01/2021",
          "value": "16"
        },
        {
          "name": "09/01/2021",
          "value": "18"
        },
        {
          "name": "10/01/2021",
          "value": "20"
        }
      ],
      "volumenTotal": [
        {
          "name": "01/01/2021",
          "value": "5"
        },
        {
          "name": "02/01/2021",
          "value": "10"
        },
        {
          "name": "03/01/2021",
          "value": "15"
        },
        {
          "name": "04/01/2021",
          "value": "20"
        },
        {
          "name": "05/01/2021",
          "value": "25"
        },
        {
          "name": "06/01/2021",
          "value": "30"
        },
        {
          "name": "07/01/2021",
          "value": "35"
        },
        {
          "name": "08/01/2021",
          "value": "40"
        },
        {
          "name": "09/01/2021",
          "value": "45"
        },
        {
          "name": "10/01/2021",
          "value": "50"
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Ejercicio 2",
      "descripcion": "Descripcion del ejercicio 2",
      "repeticionMaxima": [
        {
          "name": "01/01/2021",
          "value": "10"
        },
        {
          "name": "02/01/2021",
          "value": "12"
        },
        {
          "name": "03/01/2021",
          "value": "15"
        },
        {
          "name": "04/01/2021",
          "value": "20"
        },
        {
          "name": "05/01/2021",
          "value": "25"
        },
        {
          "name": "06/01/2021",
          "value": "30"
        },
        {
          "name": "07/01/2021",
          "value": "35"
        },
        {
          "name": "08/01/2021",
          "value": "40"
        },
        {
          "name": "09/01/2021",
          "value": "45"
        },
        {
          "name": "10/01/2021",
          "value": "50"
        }
      ],
      "pesoEfectivo": [
        {
          "name": "01/01/2021",
          "value": "2"
        },
        {
          "name": "02/01/2021",
          "value": "4"
        },
        {
          "name": "03/01/2021",
          "value": "6"
        },
        {
          "name": "04/01/2021",
          "value": "8"
        },
        {
          "name": "05/01/2021",
          "value": "10"
        },
        {
          "name": "06/01/2021",
          "value": "12"
        },
        {
          "name": "07/01/2021",
          "value": "14"
        },
        {
          "name": "08/01/2021",
          "value": "16"
        },
        {
          "name": "09/01/2021",
          "value": "18"
        },
        {
          "name": "10/01/2021",
          "value": "20"
        }
      ],
      "volumenTotal": [
        {
          "name": "01/01/2021",
          "value": "5"
        },
        {
          "name": "02/01/2021",
          "value": "10"
        },
        {
          "name": "03/01/2021",
          "value": "15"
        },
        {
          "name": "04/01/2021",
          "value": "20"
        },
        {
          "name": "05/01/2021",
          "value": "25"
        },
        {
          "name": "06/01/2021",
          "value": "30"
        },
        {
          "name": "07/01/2021",
          "value": "35"
        },
        {
          "name": "08/01/2021",
          "value": "40"
        },
        {
          "name": "09/01/2021",
          "value": "45"
        },
        {
          "name": "10/01/2021",
          "value": "50"
        }
      ]
    }
  ]

    // Graphs
    //ngdata
    public repMaxLineChart: ChartConfiguration<'line'>['data'] = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'Repeticion máxima',
          fill: false, // Set fill to false to hide the area below the line
          tension: 0.5,
          borderColor: '#39AFAC', // Change the border color to match the area below
          backgroundColor: '#39AFAC' // Keep the background color the same
        }
      ]
    };
    public pesoEfectivoLineChart: ChartConfiguration<'line'>['data'] = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'Peso efectivo',
          fill: false, // Set fill to false to hide the area below the line
          tension: 0.5,
          borderColor: '#39AFAC', // Change the border color to match the area below
          backgroundColor: '#39AFAC' // Keep the background color the same
        }
      ]
    };
    public volumenTotalLineChart: ChartConfiguration<'line'>['data'] = {
      labels: [],
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
  


  getTotalVolume(data: { volumenTotal: { name: string, value: string }[] }): number {
    return data.volumenTotal.reduce((total, entry) => total + parseInt(entry.value), 0);
  }

  onClickBack() {
    localStorage.removeItem('ejercicioId');
    this.router.navigate(['/estadisticas']);
  }

  transformData(data_points: [], name: string){
    let data = [{
      "name": name,
      "series": data_points
    }];
    console.log(data);
    return data;
  }

  constructor(private router: Router) { 
    addIcons({arrowBack});
  }

  ngOnInit() {

    this.ejercicioId = parseInt(localStorage.getItem('ejercicioId') || '0');

    this.ejercicio = this.ejercicios.find(ejercicio => ejercicio.id === this.ejercicioId); 

    // Calculate the total volume of the exercise
    this.kgsMovidos = this.getTotalVolume(this.ejercicio);

    // Calculate the expected max
    //TODO: Implement the formula to calculate the expected max

    // Fill the graph data
    this.repMaxLineChart.datasets[0].data = this.ejercicio.repeticionMaxima.map((entry: { name: string, value: string }) => Number(entry.value));
    this.repMaxLineChart.labels = Array(this.ejercicio.repeticionMaxima.length).fill('');
    console.log(this.repMaxLineChart.datasets[0].data);

    this.pesoEfectivoLineChart.datasets[0].data = this.ejercicio.pesoEfectivo.map((entry: { name: string, value: string }) => Number(entry.value));
    this.pesoEfectivoLineChart.labels = Array(this.ejercicio.pesoEfectivo.length).fill('');
    console.log(this.pesoEfectivoLineChart.datasets[0].data);

    this.volumenTotalLineChart.datasets[0].data = this.ejercicio.volumenTotal.map((entry: { name: string, value: string }) => Number(entry.value));
    this.volumenTotalLineChart.labels = Array(this.ejercicio.volumenTotal.length).fill('');
    console.log(this.volumenTotalLineChart.datasets[0].data);
  }

}
