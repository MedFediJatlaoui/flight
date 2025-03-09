package com.example.flight.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Flight {
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public @NotNull(message = "La date de départ ne doit pas être nulle") LocalDate getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(@NotNull(message = "La date de départ ne doit pas être nulle") LocalDate dateDepart) {
        this.dateDepart = dateDepart;
    }

    public @NotNull(message = "La date d'arrivée ne doit pas être nulle") LocalDate getDateArrivee() {
        return dateArrivee;
    }

    public void setDateArrivee(@NotNull(message = "La date d'arrivée ne doit pas être nulle") LocalDate dateArrivee) {
        this.dateArrivee = dateArrivee;
    }

    public @NotBlank(message = "La ville de départ ne doit pas être vide") String getVilleDepart() {
        return villeDepart;
    }

    public void setVilleDepart(@NotBlank(message = "La ville de départ ne doit pas être vide") String villeDepart) {
        this.villeDepart = villeDepart;
    }

    public @NotBlank(message = "La ville d'arrivée ne doit pas être vide") String getVilleArrivee() {
        return villeArrivee;
    }

    public void setVilleArrivee(@NotBlank(message = "La ville d'arrivée ne doit pas être vide") String villeArrivee) {
        this.villeArrivee = villeArrivee;
    }

    public @NotNull(message = "Le prix ne doit pas être nul") @Positive(message = "Le prix doit être positif") BigDecimal getPrix() {
        return prix;
    }

    public void setPrix(@NotNull(message = "Le prix ne doit pas être nul") @Positive(message = "Le prix doit être positif") BigDecimal prix) {
        this.prix = prix;
    }

    public @NotNull(message = "Le temps de trajet ne doit pas être nul") @Positive(message = "Le temps de trajet doit être positif") Integer getTempsTrajet() {
        return tempsTrajet;
    }

    public void setTempsTrajet(@NotNull(message = "Le temps de trajet ne doit pas être nul") @Positive(message = "Le temps de trajet doit être positif") Integer tempsTrajet) {
        this.tempsTrajet = tempsTrajet;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotNull(message = "La date de départ ne doit pas être nulle")
    private LocalDate dateDepart;
    @NotNull(message = "La date d'arrivée ne doit pas être nulle")
    private LocalDate dateArrivee;
    @NotBlank(message = "La ville de départ ne doit pas être vide")
    private String villeDepart;

    @NotBlank(message = "La ville d'arrivée ne doit pas être vide")
    private String villeArrivee;

    @NotNull(message = "Le prix ne doit pas être nul")
    @Positive(message = "Le prix doit être positif")
    private BigDecimal prix;

    @NotNull(message = "Le temps de trajet ne doit pas être nul")
    @Positive(message = "Le temps de trajet doit être positif")
    private Integer tempsTrajet;
}
