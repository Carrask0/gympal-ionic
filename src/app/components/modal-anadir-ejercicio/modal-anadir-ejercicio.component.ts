import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { MatDialogRef } from '@angular/material/dialog';


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
    this.dialogRef.close();
  }

  onClickAddExercise(){
    console.log("onClickAddExercise")
    this.dialogRef.close();
  }

  constructor(private dialogRef: MatDialogRef<ModalAnadirEjercicioComponent>) { 
    addIcons({close});
  }

  ngOnInit() {}

}
