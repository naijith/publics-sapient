// SearchComponent.tsx
import React, { useState } from 'react';

interface TableEntry {
  countryId: string;
  countryName: string;
  leagueId: string;
  leagueName: string;
  teamId: string;
  teamName: string;
}

interface SearchComponentProps {
  onSearch: (params: {
    countryId: string;
    countryName: string;
    leagueId: string;
    leagueName: string;
    teamId: string;
    teamName: string;
  }) => void;
  values: TableEntry
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch, values }) => {
  const [countryId, setCountryId] = useState(values.countryId);
  const [countryName, setCountryName] = useState(values.countryName);
  const [leagueId, setLeagueId] = useState(values.leagueId);
  const [leagueName, setLeagueName] = useState(values.leagueName);
  const [teamId, setTeamId] = useState(values.teamId);
  const [teamName, setTeamName] = useState(values.teamName);

  const handleSearch = () => {
    onSearch({
      countryId,
      countryName,
      leagueId,
      leagueName,
      teamId,
      teamName,
    });
  };

  return (
    <div>
    <div className="flex p-3 m-5 border border-gray-300 rounded-lg">
      <div className="mb-4 p-3">
        <label className="block text-sm font-medium text-gray-700">Country ID</label>
        <input
          type="text"
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 p-3">
        <label className="block text-sm font-medium text-gray-700">Country Name</label>
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 p-3">
        <label className="block text-sm font-medium text-gray-700">League ID</label>
        <input
          type="text"
          value={leagueId}
          onChange={(e) => setLeagueId(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 p-3">
        <label className="block text-sm font-medium text-gray-700">League Name</label>
        <input
          type="text"
          value={leagueName}
          onChange={(e) => setLeagueName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 p-3">
        <label className="block text-sm font-medium text-gray-700">Team ID</label>
        <input
          type="text"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 p-3">
        <label className="block text-sm font-medium text-gray-700">Team Name</label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
    <div className='flex item-center justify-center'>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </div>
    </div>
  );
};

export default SearchComponent;