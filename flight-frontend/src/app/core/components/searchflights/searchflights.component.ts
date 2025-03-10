import { Component } from '@angular/core';
import { FlightService } from "../../services/flight.service";

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.scss']
})
export class SearchflightsComponent {

  searchCriteria = {
    villeDepart: '',
    villeArrivee: '',
    dateDepart: '',
    dateArrivee: '',
    filterByPrice: false,
    filterByTime: false
  };

  tri: string = '';

  constructor(private flightService: FlightService) {}
  togglePriceFilter() {
    this.searchCriteria.filterByPrice = !this.searchCriteria.filterByPrice;
    if (this.searchCriteria.filterByPrice) {
      this.searchCriteria.filterByTime = false; 
      this.tri = 'prix';
    } else {
      this.tri = '';
    }
  }

  toggleTimeFilter() {
    this.searchCriteria.filterByTime = !this.searchCriteria.filterByTime;
    if (this.searchCriteria.filterByTime) {
      this.searchCriteria.filterByPrice = false;
      this.tri = 'temps_trajet';
    } else {
      this.tri = '';
    }
  }


  searchFlights() {
    console.log('Searching flights with criteria:', this.searchCriteria, 'Tri:', this.tri);
    this.flightService.searchFlights(
      this.searchCriteria.dateDepart,
      this.searchCriteria.dateArrivee,
      this.searchCriteria.villeDepart,
      this.searchCriteria.villeArrivee,
      this.tri
    ).subscribe(flights => {
      this.flightService.updateFlights(flights);
      console.log('Found flights:', flights);
    }, error => {
      console.error('Error searching flights:', error);
    });
  }
}
