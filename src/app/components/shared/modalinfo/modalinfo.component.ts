import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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

    close(): void {
      this.dialogRef.close();
    }

}
