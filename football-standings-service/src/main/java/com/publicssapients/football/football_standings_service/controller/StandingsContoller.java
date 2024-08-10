package com.publicssapients.football.football_standings_service.controller;

import com.publicssapients.football.football_standings_service.model.Standings;
import com.publicssapients.football.football_standings_service.service.StandingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import java.util.List;

@RestController
@RequestMapping("/api/v1/standings")
public class StandingsContoller {

    @Autowired
    private StandingsService standingsService;

    @GetMapping
    public Mono<ResponseEntity<List<Standings>>> getAllStandingsFromOnline(
            @RequestParam(value = "countryId", required = false) String countryId,
            @RequestParam(value = "countryName", required = false) String countryName,
            @RequestParam(value = "leagueId") String leagueId,
            @RequestParam(value = "leagueName", required = false) String leagueName,
            @RequestParam(value = "teamId", required = false) String teamId,
            @RequestParam(value = "teamName", required = false) String teamName) {

        return standingsService.getStandingsFromOnline(countryName, leagueId, leagueName, teamId, teamName)
                .map(ResponseEntity::ok);

    }
}
