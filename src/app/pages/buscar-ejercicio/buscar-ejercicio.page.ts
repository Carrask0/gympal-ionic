import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-buscar-ejercicio',
  templateUrl: './buscar-ejercicio.page.html',
  styleUrls: ['./buscar-ejercicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BuscarEjercicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
