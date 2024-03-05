import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SesionPage implements OnInit {

  session: any; //TODO: create session model
  editMode: boolean = false;
  date: string = "01/01/2021";

  constructor() { }

  ngOnInit() {

    this.editMode = false;

    this.date = new Date().toISOString();
    //format date to dd/mm/yyyy
    let date = new Date(this.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    this.date = day + "/" + month + "/" + year;


    this.session = {
      sessionName: "Session 1",
      sessionDate: "1/1/2021",
      puntos: 0,
      kgsMovidos: 0,
      kcalsQuemadas: 0,
      exercises: [
        {
          exerciseName: "Press de banca",
          kgs: 80,
          reps: 10,
          sets: 3,
        },
        {
          exerciseName: "Sentadillas",
          kgs: 100,
          reps: 8,
          sets: 5,
        },
        {
          exerciseName: "Dominadas",
          kgs: 0,
          reps: 10,
          sets: 3,
        },
      ],
    };
  }

}
