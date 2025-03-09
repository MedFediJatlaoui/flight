package com.example.flight.Controller;
import com.example.flight.Service.FlightService;
import com.example.flight.entity.Flight;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/vols")
@Validated
public class FlightController {
    private final FlightService flightService;

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }
    @GetMapping
    public List<Flight> getFlights(
            @RequestParam(required = false) String dateDepart,
            @RequestParam(required = false) String dateArrivee,
            @RequestParam(required = false) String villeDepart,
            @RequestParam(required = false) String villeArrivee,
            @RequestParam(required = false) String tri) {

        return flightService.getFilteredFlights(dateDepart, dateArrivee, villeDepart, villeArrivee, tri);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public List<Flight> createFlights( @RequestBody List<Flight> flights) {
        return flightService.saveAllFlights(flights);
    }
}