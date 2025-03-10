import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from "../../../shared/models/flight";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public flights: Flight[] = [];
  public initialSearchDone = false;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightService.flights$.subscribe(
      (data: Flight[]) => {
        this.flights = data;
        console.log('Updated flights:', this.flights);
      },
      (error) => {
        console.error('Error fetching flights:', error);
      }
    );

    if (!this.initialSearchDone) {
      this.searchFlights();
    }
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
}
