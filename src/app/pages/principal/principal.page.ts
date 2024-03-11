import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle, barChart } from 'ionicons/icons';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrincipalPage implements OnInit {

  user: any //TODO: create user model

  constructor() { 
    addIcons({addCircle, barChart});
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
