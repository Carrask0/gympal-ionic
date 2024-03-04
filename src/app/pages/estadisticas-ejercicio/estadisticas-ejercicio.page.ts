import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-estadisticas-ejercicio',
  templateUrl: './estadisticas-ejercicio.page.html',
  styleUrls: ['./estadisticas-ejercicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EstadisticasEjercicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
