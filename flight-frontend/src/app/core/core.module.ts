import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchflightsComponent } from './components/searchflights/searchflights.component';
import { FlightsComponent } from './components/flights/flights.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    SearchflightsComponent,
    FlightsComponent,
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
    MatIconModule
  ]
})
export class CoreModule { }
