import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LineChartComponent } from 'src/app/common/line-chart/line-chart.component';

@Component({
  selector: 'app-estadisticas-ejercicio',
  templateUrl: './estadisticas-ejercicio.page.html',
  styleUrls: ['./estadisticas-ejercicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LineChartComponent]
})
export class EstadisticasEjercicioPage implements OnInit {

  ejercicio: any = {};
  ejercicioId: number = 0;
  kgsMovidos: number = 0;
  expectedMax: number = 0;
  graphSize: any = [window.innerWidth * 0.8, window.innerHeight * 0.2];

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

  constructor(private router: Router) { }

  ngOnInit() {

    this.ejercicioId = parseInt(localStorage.getItem('ejercicioId') || '0');

    this.ejercicio = this.ejercicios.find(ejercicio => ejercicio.id === this.ejercicioId); 

    // Calculate the total volume of the exercise
    this.kgsMovidos = this.getTotalVolume(this.ejercicio);

  }

}
