import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';


@Component({
  selector: 'app-modal-anadir-ejercicio',
  templateUrl: './modal-anadir-ejercicio.component.html',
  styleUrls: ['./modal-anadir-ejercicio.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ModalAnadirEjercicioComponent  implements OnInit {


  onClickCloseIcon(){
    console.log("onClickCloseIcon")
  }

  onClickAddExercise(){
    console.log("onClickAddExercise")
  }

  constructor() { 
    addIcons({close});
  }

  ngOnInit() {}

}
