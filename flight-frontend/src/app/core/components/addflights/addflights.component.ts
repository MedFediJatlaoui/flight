import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { FlightService } from "../../services/flight.service";
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';  // For navigation

@Component({
  selector: 'app-addflights',
  templateUrl: './addflights.component.html',
  styleUrls: ['./addflights.component.scss']
})
export class AddflightsComponent {
  flightForm: FormGroup;
  flights: any[] = [];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private flightService: FlightService,
    private dialogRef: MatDialogRef<AddflightsComponent>,
    private router: Router
  ) {
    this.flightForm = this.fb.group({
      villeDepart: ['', Validators.required],
      villeArrivee: ['', Validators.required],
      dateDepart: ['', Validators.required],
      dateArrivee: ['', [Validators.required, this.validateDateArrivee.bind(this)]],
      prix: ['', [Validators.required, Validators.min(0)]],
      tempsTrajet: ['', [Validators.required, Validators.min(0)]]
    });
  }

  validateDateArrivee(control: AbstractControl) {
    const dateDepart = this.flightForm?.get('dateDepart')?.value;
    const dateArrivee = control.value;

    if (dateDepart && dateArrivee && new Date(dateArrivee) < new Date(dateDepart)) {
      return { invalidDate: true };
    }
    return null;
  }

  submitForm() {
    if (this.flightForm.valid) {
      const newFlight = { ...this.flightForm.value };
      this.flights.push(newFlight);
      this.flightForm.reset();
    }
  }

  submitAllFlights() {
    if (this.flights.length > 0) {
      this.flightService.addFlights(this.flights).subscribe({
        next: (addedFlights) => {
          this.flights = [];
          this.showSuccessSnackbar('Tous les vols ont été ajoutés avec succès!');
          this.dialogRef.close();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout des vols:', error);
          this.showErrorSnackbar('Échec de l\'ajout des vols.');
        }
      });
    } else {
      this.showErrorSnackbar('Aucun vol à ajouter.');
    }
  }

  showSuccessSnackbar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }
}
