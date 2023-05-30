import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonajeModel } from '../models/models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ModalinfoComponent } from '../components/shared/modalinfo/modalinfo.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  environment = environment;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getpersonajes(): Observable<PersonajeModel[]> {
    const url = this.environment.baseUrl + this.environment.getAll;

    return this.http.get<PersonajeModel[]>(url);
  }

  openModal(data: PersonajeModel): MatDialogRef<ModalinfoComponent> {
    return this.dialog.open<ModalinfoComponent>(ModalinfoComponent, {
      disableClose: true,
      data: data,
    });
  }
}
