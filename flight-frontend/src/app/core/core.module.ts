import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchflightsComponent } from './components/searchflights/searchflights.component';
import { FlightsComponent } from './components/flights/flights.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import { AddflightsComponent } from './components/addflights/addflights.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    SearchflightsComponent,
    FlightsComponent,
    AddflightsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatPaginatorModule,
  ]
})
export class CoreModule { }
