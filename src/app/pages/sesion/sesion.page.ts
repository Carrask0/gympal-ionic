import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { arrowBack, create, trash, addCircle } from 'ionicons/icons';import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class SesionPage implements OnInit {

  session: any; //TODO: create session model
  editMode: boolean = false;
  sessionId: number = -1;
  date: string = "01/01/2021";

  constructor(private router: Router) { 
    addIcons({arrowBack, create, trash, addCircle});
  }

  onClickDeleteExercise(exercise: any) {
    let index = this.session.exercises.indexOf(exercise);
    this.session.exercises.splice(index, 1);
  }

  onClickAddExercise() {
    this.router.navigate(['/buscar-ejercicio']);
  }

  onClickArrowBack() {
    //Erase local storage
    localStorage.removeItem('session-id');
    localStorage.removeItem('session-editMode');
  }

  onClickEditSession() {
    localStorage.setItem('session-editMode', 'true');
    this.editMode = true;
  }

  onClickAcceptEdit() {
    localStorage.setItem('session-editMode', 'false');
    this.editMode = false;
    console.log("Session saved");
    //TODO: save session to database
  }

  ngOnInit() {
    this.sessionId = parseInt(localStorage.getItem('session-id') || '-1');
    this.editMode = localStorage.getItem('session-editMode') == 'true';

    console.log("Session id: " + this.sessionId);
    console.log("Edit mode: " + this.editMode);

    this.date = new Date().toISOString();
    //format date to dd/mm/yyyy
    let date = new Date(this.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    this.date = day + "/" + month + "/" + year;

    let sessions = [
      {
        sessionId: 1,
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
      },
      {
        sessionId: 2,
        sessionName: "Session 2",
        sessionDate: "2/1/2021",
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
      },
      {
        sessionId: 3,
        sessionName: "Session 3",
        sessionDate: "3/1/2021",
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
      },
    ]

    if (this.sessionId == -1) {
      console.log("Creating new session");
      this.session = {
        sessionName: "Nueva sesion",
        sessionDate: this.date,
        puntos: 0,
        kgsMovidos: 0,
        kcalsQuemadas: 0,
        exercises: []
      }

    } else {
      console.log("Editing session");
      this.session = sessions.find(s => s.sessionId == this.sessionId);
    }

  }

    

}
