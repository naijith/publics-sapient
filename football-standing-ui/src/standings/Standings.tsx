import React, { useState, useEffect } from 'react';
import TableComponent from '../table/Table';
import SearchComponent from '../serach/Search';

import axios from 'axios';

interface TableEntry {
  countryId: string;
  countryName: string;
  leagueId: string;
  leagueName: string;
  teamId: string;
  teamName: string;
  overallPosition: string
}

const StandingsComponent: React.FC = () => {
  const [entries, setEntries] = useState<TableEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<{
    countryId: string;
    countryName: string;
    leagueId: string;
    leagueName: string;
    teamId: string;
    teamName: string;
  }>({
    countryId: '',
    countryName: '',
    leagueId: '',
    leagueName: '',
    teamId: '',
    teamName: '',
  });

  const fetchData = async (params: {
    countryId: string;
    countryName: string;
    leagueId: string;
    leagueName: string;
    teamId: string;
    teamName: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      // Construct query parameters from the searchParams
      const queryParams = new URLSearchParams();

      if (searchParams.countryId) queryParams.append('countryId', searchParams.countryId);
      if (searchParams.countryName) queryParams.append('countryName', searchParams.countryName);
      if (searchParams.leagueId) queryParams.append('leagueId', searchParams.leagueId);
      if (searchParams.leagueName) queryParams.append('leagueName', searchParams.leagueName);
      if (searchParams.teamId) queryParams.append('teamId', searchParams.teamId);
      if (searchParams.teamName) queryParams.append('teamName', searchParams.teamName);

      if (!searchParams.leagueId) queryParams.append('leagueId', '152');
      
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:8080/api/v1/standings?${queryParams}`,
        headers: { 
          'accept': '*/*', 
          'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
        }
      };

      console.log(`http://localhost:8080/api/v1/standings?${queryParams}`);

      const response = await axios.request(config);
      const filteredData = response.data.map((item: { [x: string]: any; }) => ({
        countryId: 'asdf',
        countryName: item['country_name'],
        leagueId: item['league_id'],
        leagueName: item['league_name'],
        teamId: item['team_id'],
        teamName: item['team_name'],
        overallPosition: item['overall_league_position'],
      }));
      console.log(filteredData);
      setEntries(filteredData);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchParams);
  }, [searchParams]); // Fetch data when searchParams change

  const handleSearch = (params: {
    countryId: string;
    countryName: string;
    leagueId: string;
    leagueName: string;
    teamId: string;
    teamName: string;
  }) => {
    setSearchParams(params);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <SearchComponent onSearch={handleSearch} values={searchParams}/>
      {entries ? (
        <TableComponent entries={entries}/>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default StandingsComponent;