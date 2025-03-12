import { JSX, useState } from 'react';

type Prors = {
  onSearch: (name: string) => void;
  onStatusChange: (status: string) => void;
  selectedStatus: string;
  onReset: () => void;
};

export function Filters({
  onSearch,
  onStatusChange,
  selectedStatus,
  onReset,
}: Prors): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const statusOptions = ['All', 'Alive', 'Dead', 'unknown'];

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mb-8 p-6 bg-gray-800 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-gray-400 text-sm mb-2">
            Search by name:
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter character name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full md:w-64">
          <label className="block text-gray-400 text-sm mb-2">
            Filter by status:
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full py-2 bg-gray-700 text-white rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option} className="bg-gray-800">
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onReset}
          className="w-full md:w-auto px-4 py-2 bg-red-500/30 hover:bg-red-600/30 text-white 
                    rounded-lg transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Reset Filters</span>
        </button>
      </div>
    </div>
  );
}
