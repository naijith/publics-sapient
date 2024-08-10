import React, { useState } from 'react';
import './Search.css';

interface SearchComponentProps {
    onSearch: (searchData: SearchData) => void;
}
  
export interface SearchData {
    country: { id: string; name: string };
    league: { id: string; name: string };
    team: { id: string; name: string };
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const [country, setCountry] = useState({ id: '', name: '' });
    const [league, setLeague] = useState({ id: '', name: '' });
    const [team, setTeam] = useState({ id: '', name: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'country' | 'league' | 'team', field: 'id' | 'name') => {
        const value = e.target.value;
        if (type === 'country') {
        setCountry({ ...country, [field]: value });
        } else if (type === 'league') {
        setLeague({ ...league, [field]: value });
        } else if (type === 'team') {
        setTeam({ ...team, [field]: value });
        }
    };

    const handleSearch = () => {
        onSearch({ country, league, team });
    };

    return (
        <div className="space-y-4">
        <div className="flex space-x-4">
            <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Country ID</label>
            <input
                type="text"
                value={country.id}
                onChange={(e) => handleInputChange(e, 'country', 'id')}
                placeholder="Country ID"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Country Name</label>
            <input
                type="text"
                value={country.name}
                onChange={(e) => handleInputChange(e, 'country', 'name')}
                placeholder="Country Name"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </div>
        <div className="flex space-x-4">
            <div className="flex flex-col">
            <label className="font-semibold text-gray-700">League ID</label>
            <input
                type="text"
                value={league.id}
                onChange={(e) => handleInputChange(e, 'league', 'id')}
                placeholder="League ID"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div className="flex flex-col">
            <label className="font-semibold text-gray-700">League Name</label>
            <input
                type="text"
                value={league.name}
                onChange={(e) => handleInputChange(e, 'league', 'name')}
                placeholder="League Name"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </div>
        <div className="flex space-x-4">
            <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Team ID</label>
            <input
                type="text"
                value={team.id}
                onChange={(e) => handleInputChange(e, 'team', 'id')}
                placeholder="Team ID"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Team Name</label>
            <input
                type="text"
                value={team.name}
                onChange={(e) => handleInputChange(e, 'team', 'name')}
                placeholder="Team Name"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </div>
        <button
            onClick={handleSearch}
            className="px-6 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            Search
        </button>
        </div>
    );
};
  
export default SearchComponent;
