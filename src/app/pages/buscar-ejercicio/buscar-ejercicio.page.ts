import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-ejercicio',
  templateUrl: './buscar-ejercicio.page.html',
  styleUrls: ['./buscar-ejercicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BuscarEjercicioPage implements OnInit {

  exercises: any[] = [];

  constructor(private router: Router) { 
    addIcons({arrowBack});
  }

  onClickArrowBack() {
    this.router.navigate(['/sesion']);
  }

  ngOnInit() {
    this.exercises = [
      "Press de banca",
      "Sentadillas",
      "Dominadas",
      "Curl de biceps",
      "Press militar"
    ]
  }

}
