package com.publicssapients.football.football_standings_service.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.publicssapients.football.football_standings_service.model.Standings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StandingsService {

    private final String onlineApi = "apiv3.apifootball.com";
    private final String apiKey = System.getenv("FOOTBALL_APIKEY");

    @Autowired
    private WebClient.Builder webClientBuilder;

    public Mono<List<Standings>> getStandingsFromOnline(
            String countryName,
            String leagueId,
            String leagueName,
            String teamId,
            String teamName
    ){
        WebClient webClient = webClientBuilder.build();

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .host(onlineApi)
                        .path("/")
                        .queryParam("action", "get_standings")
                        .queryParam("league_id", leagueId)
                        .queryParam("APIkey", apiKey)
                        .build())
                .retrieve()
                .bodyToMono(String.class)
                .map(response -> {
                    // Parse the JSON response into a list of TeamStanding objects
                    List<Standings> standings = parseStandings(response);

                    // Filter by country_name if provided
                    return standings.stream()
                            .filter(team -> (countryName == null || countryName.equalsIgnoreCase(team.getCountryName())))
                            .filter(team -> (leagueId == null || leagueId.equalsIgnoreCase(team.getLeagueId())))
                            .filter(team -> (leagueName == null || leagueName.equalsIgnoreCase(team.getLeagueName())))
                            .filter(team -> (teamId == null || teamId.equalsIgnoreCase(team.getTeamId())))
                            .filter(team -> (teamName == null || teamName.equalsIgnoreCase(team.getTeamName())))
                            .collect(Collectors.toList());
                });
    }

    private List<Standings> parseStandings(String response) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(response, new TypeReference<List<Standings>>() {});
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to parse standings", e);
        }
    }
}
