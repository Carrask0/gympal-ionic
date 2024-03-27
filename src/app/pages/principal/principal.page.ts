import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle, barChart } from 'ionicons/icons';
import { NavigationExtras, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PrincipalPage implements OnInit {

  user: any //TODO: create user model

  constructor(private router: Router) { 
    addIcons({addCircle, barChart});
  }

  onClickAddSession() {
    localStorage.setItem('session-editMode', 'true');
    localStorage.setItem('session-id', '-1');
    this.router.navigate(['/sesion']);
  }

  onClickSession(sessionId: number) {
    localStorage.setItem('session-id', sessionId.toString());
    localStorage.setItem('session-editMode', 'false');
    this.router.navigate(['/sesion']);
  }

  ngOnInit() {

    // Probably receives user info from a login process
    // Or we assume the user is already logged in and we have only one user for this demo

    //mock user
    this.user = {
      id: 1,
      name: "John Doe",
      profile_pic: "assets/imgs/profile_pic.png",
      goalPoints: 210,
      todayPoints: 30,
      todaySessions: [
        {
          id: 1,
          name: "Sesión 1"
        },
        {
          id: 2,
          name: "Sesión 2"
        },
        {
          id: 3,
          name: "Sesión 3"
        }
      ]
    }
  }
}
