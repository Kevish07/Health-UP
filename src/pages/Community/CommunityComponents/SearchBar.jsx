import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from './Button';

function SearchBar({ onSearch, isSearching }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8957FF]/30 transition-all"
          placeholder="Search by name, specialty, or location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Button type="submit" size="lg" isLoading={isSearching}>
        Find Match
      </Button>
    </form>
  );
}

export default SearchBar;