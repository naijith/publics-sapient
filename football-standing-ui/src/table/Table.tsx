import React from 'react';

interface TableEntry {
  countryId: string;
  countryName: string;
  leagueId: string;
  leagueName: string;
  teamId: string;
  teamName: string;
  overallPosition: string
}

interface TableComponentProps {
  entries: TableEntry[];
}

const TableComponent: React.FC<TableComponentProps> = ({ entries }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">League ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">League Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Name</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.countryName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.leagueId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.leagueName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.teamId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.teamName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.overallPosition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;