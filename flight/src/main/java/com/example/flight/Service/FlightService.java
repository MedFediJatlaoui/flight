package com.example.flight.Service;
import com.example.flight.entity.Flight;
import com.example.flight.repository.FlightRepository;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {
    private final FlightRepository flightRepository;

    public FlightService(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }



    public List<Flight> getFilteredFlights(String dateDepart, String dateArrivee,
                                           String villeDepart, String villeArrivee, String tri) {
        Specification<Flight> spec = Specification.where(null);

        Optional<LocalDate> parsedDateDepart = parseDateInput(dateDepart);
        if (parsedDateDepart.isPresent()) {
            spec = spec.and((root, query, cb) ->
                    cb.equal(root.get("dateDepart"), parsedDateDepart.get()));
        }

        Optional<LocalDate> parsedDateArrivee = parseDateInput(dateArrivee);
        if (parsedDateArrivee.isPresent()) {
            spec = spec.and((root, query, cb) ->
                    cb.equal(root.get("dateArrivee"), parsedDateArrivee.get()));
        }

        if (villeDepart != null && !villeDepart.isEmpty()) {
            spec = spec.and((root, query, cb) -> cb.equal(root.get("villeDepart"), villeDepart));
        }

      if (villeArrivee != null && !villeArrivee.isEmpty()) {
            spec = spec.and((root, query, cb) -> cb.equal(root.get("villeArrivee"), villeArrivee));
        }


        Sort sort = Sort.unsorted();
        if ("prix".equalsIgnoreCase(tri)) {
            sort = Sort.by(Sort.Direction.ASC, "prix");
        } else if ("temps_trajet".equalsIgnoreCase(tri)) {
            sort = Sort.by(Sort.Direction.ASC, "tempsTrajet");
        }


        return flightRepository.findAll(spec, sort);
    }

    private Optional<LocalDate> parseDateInput(String input) {
        if (input == null || input.isEmpty()) return Optional.empty();
        try {
            return Optional.of(LocalDate.parse(input));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    @Transactional
    public List<Flight> saveAllFlights(List<Flight> flights) {
        return flightRepository.saveAll(flights);
    }
}