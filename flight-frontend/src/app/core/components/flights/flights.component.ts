import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from "../../../shared/models/flight";
import { AddflightsComponent } from "../addflights/addflights.component";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public flights: Flight[] = [];
  public pagedFlights: Flight[] = [];
  public initialSearchDone = false;

  constructor(private flightService: FlightService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.flightService.flights$.subscribe(
      (data: Flight[]) => {
        this.flights = data;
        console.log('Updated flights:', this.flights);
        this.updatePagedFlights();
      },
      (error) => {
        console.error('Error fetching flights:', error);
      }
    );

    if (!this.initialSearchDone) {
      this.searchFlights();
    }
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => this.updatePagedFlights());
  }

  openAddFlightDialog(): void {
    const dialogRef = this.dialog.open(AddflightsComponent, {
      width: '600px',
      maxHeight: '80vh',
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Flight added!', result);
        this.flights.push(result);
        this.updatePagedFlights();
      }
    });
  }

  searchFlights(): void {
    this.flightService.searchFlights('', '', '', '', '').subscribe(
      (data: Flight[]) => {
        if (data.length === 0) {
          this.flightService.updateFlights([]);
        } else {
          this.flightService.updateFlights(data);
        }
      },
      (error) => {
        console.error('Error fetching flights:', error);
        this.flightService.updateFlights([]);
      }
    );
    this.initialSearchDone = true;
  }

  updatePagedFlights(): void {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.pagedFlights = this.flights.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
