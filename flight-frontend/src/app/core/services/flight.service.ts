import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Flight} from "../../shared/models/flight";

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:8080/api/vols';

  constructor(private http: HttpClient) { }

  searchFlights(
    dateDepart?: string,
    dateArrivee?: string,
    villeDepart?: string,
    villeArrivee?: string,
    tri?: string
  ): Observable<Flight[]> {
    let params = new HttpParams();

    if (dateDepart) params = params.set('dateDepart', dateDepart);
    if (dateArrivee) params = params.set('dateArrivee', dateArrivee);
    if (villeDepart) params = params.set('villeDepart', villeDepart);
    if (villeArrivee) params = params.set('villeArrivee', villeArrivee);
    if (tri) params = params.set('tri', tri);

    return this.http.get<Flight[]>(this.apiUrl, { params });
  }
  private flightsSubject = new BehaviorSubject<Flight[]>([]);
  flights$ = this.flightsSubject.asObservable();

  updateFlights(flights: Flight[]) {
    this.flightsSubject.next(flights);
  }
}
