import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UtilsService } from 'src/app/services/utils.service';
import { PersonajeModel } from 'src/app/models/models';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalinfoComponent } from '../shared/modalinfo/modalinfo.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {

  personajes: PersonajeModel[] = []
  displayedColumns: string[] = ['id', 'name', 'gender', 'homeworld', 'species'];
  filtro = '';
  

  constructor(private utilService: UtilsService, public dialog: MatDialog) { 
    this.utilService.getpersonajes().subscribe((res: PersonajeModel[]) => {
      this.personajes = res;
    });
  }

  applyFilter() {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowSelcted(row: PersonajeModel): void {
    this.utilService.openModal(row);
  }

}


