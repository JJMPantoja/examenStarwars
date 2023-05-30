import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PersonajeModel } from 'src/app/models/models';

@Component({
  selector: 'app-modalinfo',
  templateUrl: './modalinfo.component.html',
  styleUrls: ['./modalinfo.component.scss']
})
export class ModalinfoComponent {

  constructor(public dialogRef: MatDialogRef<ModalinfoComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: PersonajeModel          
    ) {

      console.log(this.data);
    }  

}
